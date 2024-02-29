import { useEffect, useState } from "react"
import ReactSlider from 'react-slider'
import { useAccount, useReadContract } from 'wagmi'
import {testnetUSDCContractConfig, testnetREPOContractConfig} from '../../abis'
import { getAccount } from '@wagmi/core'
import { config } from '../main'
import ExecuteTradeButton from "./ExecuteTradeButton"

const TradeEntryModal = () => {

    //const [tradeDirection, setTradeDirection] = useState('Long')
    const [leverage, setLeverage] = useState(1.00);
    const [payValue, setPayValue] = useState(1.00)
    // min value one day
    const [positionTerm, setPositionTerm] = useState(1440 * 60)

    let { address, isConnecting, isDisconnected } = useAccount(config)

    const handlePayValueChange = (e) => {
        setPayValue(e.target.value);
    };

    let userBalanceUSDCFetch = useReadContract({
        abi: testnetUSDCContractConfig.abi,
        address: testnetUSDCContractConfig.address,
        functionName: 'balanceOf',
        args: [address],
        watch: true,
        chainId:14997,
      })
    // remove usdc decimals
    userBalanceUSDCFetch = (parseInt(userBalanceUSDCFetch.data) * 10**-6).toFixed(2)

    let userBalanceRepoFetch = useReadContract({
        abi: testnetREPOContractConfig.abi,
        address: testnetREPOContractConfig.address,
        functionName: "balanceOf",
        args: [address],
        watch: true,
        chainId:14997,
    })
    
    const handleMaxButtonClick = (e) => {
        e.preventDefault()
        setPayValue(userBalanceUSDCFetch)
    }
    
    const days = Math.floor(positionTerm / (60 * 60 * 24));
    const hours = Math.floor((positionTerm % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((positionTerm % (60 * 60)) / (60));

    console.log(days, hours, minutes)
    return(
        <div className="trade-entry-modal-container">
            <form action="" method="POST" className="trade-entry-modal">
                {/* <ul className="position-directionality-selector">
                    <li className="position-directionality-selector-long" onClick={() => setTradeDirection('Long')}>Long</li>
                    <li className="position-directionality-selector-short" onClick={() => setTradeDirection('Short')}>Short</li>
                </ul> */}
                <div className="trade-entry-payment-entry">
                    <div className="trade-entry-payment-entry-top-row">
                        <div className="trade-entry-payment-entry-title">Pay:</div>
                        <div className="trade-entry-payment-entry-balance">{`Balance: ${userBalanceUSDCFetch} USDC`}</div>
                    </div>
                    <div className="trade-entry-payment-entry-bottom-row">
                        <input className="trade-entry-payment-entry-bottom-row-left" type="number" value={payValue} onChange={handlePayValueChange}></input>
                        <div className="trade-entry-payment-entry-bottom-row-right">
                            <button className="trade-entry-payment-max-button" onClick={(e) => handleMaxButtonClick(e)}>Max</button>
                        </div>
                    </div>
                </div>
                <div className="set-position-term-container">
                    <div className="set-position-term-title">
                        Set Position Term
                    </div>
                    <div className="set-position-term-current-value">
                        {`Contract Expiry in ${days} Days, ${hours} Hours, and ${minutes} Minutes`}
                    </div>
                    <div className="set-position-term-disclaimer">
                        Minimum Term: 1 Day
                    </div>
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="example-thumb"
                        trackClassName="example-track"
                        defaultValue={1440*60}
                        onChange={(props, state) => setPositionTerm(props)}
                        max={1440*60*365}
                        min={1440*60}
                        step={60}
                    />
                </div>
                <div className="trade-entry-size-container">
                    <div className="trade-entry-payment-size">
                        <div className="trade-entry-payment-size-top-row">
                            {/* <div className="trade-entry-payment-size-direction">{tradeDirection}</div> */}
                            <div className="trade-entry-payment-size-leverage">{`Leverage ${leverage}X`}</div>
                        </div>
                        <div className="trade-entry-payment-size-bottom-row">
                            <div className="trade-entry-payment-size-bottom-row-left">
                                {`${leverage * payValue} PT aUSDC`}
                            </div>
                            <div className="trade-entry-payment-size-bottom-row-right"></div>
                        </div>
                    </div>
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="example-thumb"
                        trackClassName="example-track"
                        defaultValue={1.00}
                        onChange={(props, state) => setLeverage(props)}
                        max={100}
                        min={0}
                    step={0.01}
                    />
                </div>
                <div className="trade-entry-stats">
                    <div className="trade-entry-stats-leverage">
                        <div className="trade-entry-stats-leverage-title">Leverage</div>
                        <div className="trade-entry-stats-leverage-amount">{`${leverage}X`}</div>
                    </div>
                    <div className="trade-entry-stats-execution-price">
                        <div className="trade-entry-stats-execution-price-title">Execution Price</div>
                        <div className="trade-entry-stats-execution-price-amount">0 USDC</div>
                    </div>
                    <div className="trade-entry-stats-execution-price">
                        <div className="trade-entry-stats-borrow-fee-title">Borrow Fee</div>
                        <div className="trade-entry-stats-borrow-fee-amount">0.0000% / hr</div>
                    </div>
                </div>
            </form>
            <ExecuteTradeButton leverage={leverage} payValue={payValue} positionTerm={positionTerm}/>
        </div>
    )
}

export default TradeEntryModal