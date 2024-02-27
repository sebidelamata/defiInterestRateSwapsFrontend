import { useEffect, useState } from "react"
import ReactSlider from 'react-slider'
import { useAccount, useReadContract } from 'wagmi'
import {testnetUSDCContractConfig, testnetREPOContractConfig} from '../../abis'
import { getAccount } from '@wagmi/core'
import { config } from '../main'


const TradeEntryModal = () => {
    const [tradeDirection, setTradeDirection] = useState('Long')
    const [leverage, setLeverage] = useState(1.00);
    const [payValue, setPayValue] = useState(1.00)

    let { address, isConnecting, isDisconnected } = useAccount(config)
    console.log(testnetREPOContractConfig)

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
    console.log(userBalanceUSDCFetch)
    let userBalanceRepoFetch = useReadContract({
        abi: testnetREPOContractConfig.abi,
        address: testnetREPOContractConfig.address,
        functionName: "balanceOf",
        args: [address],
        watch: true,
        chainId:14997,
      })
    console.log(userBalanceRepoFetch)
    
    const handleMaxButtonClick = (e) => {
        e.preventDefault()
        setPayValue(userBalanceUSDCFetch)
    }

    return(
        <form action="" method="POST" className="trade-entry-modal">
            <ul className="position-directionality-selector">
                <li className="position-directionality-selector-long" onClick={() => setTradeDirection('Long')}>Long</li>
                <li className="position-directionality-selector-short" onClick={() => setTradeDirection('Short')}>Short</li>
            </ul>
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
            <div className="trade-entry-payment-size">
                <div className="trade-entry-payment-size-top-row">
                    <div className="trade-entry-payment-size-direction">{tradeDirection}</div>
                    <div className="trade-entry-payment-size-leverage">{`Leverage ${leverage}X`}</div>
                </div>
                <div className="trade-entry-payment-size-bottom-row">
                    <div className="trade-entry-payment-size-bottom-row-left">
                        {`${leverage * payValue} ${tradeDirection === "Long" ? 'YT aUSDC' : 'PT aUSDC'}`}
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
            <button type="submit">{`${tradeDirection} aUSDC Rates`}</button>
        </form>
    )
}

export default TradeEntryModal