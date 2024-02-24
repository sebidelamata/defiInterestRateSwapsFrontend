import { useState } from "react"
import ReactSlider from 'react-slider'



const TradeEntryModal = () => {
    const [tradeDirection, setTradeDirection] = useState('Long')
    const [leverage, setLeverage] = useState(1.00);



    return(
        <div className="trade-entry-modal">
            <ul className="position-directionality-selector">
                <li className="position-directionality-selector-long" onClick={() => setTradeDirection('Long')}>Long</li>
                <li className="position-directionality-selector-short" onClick={() => setTradeDirection('Short')}>Short</li>
            </ul>
            <div className="trade-entry-payment-entry">
                <div className="trade-entry-payment-entry-top-row">
                    <div className="trade-entry-payment-entry-title">Pay:</div>
                    <div className="trade-entry-payment-entry-balance">Balance:</div>
                </div>
                <div className="trade-entry-payment-entry-bottom-row">
                    <div className="trade-entry-payment-entry-bottom-row-left">
                        0.0
                    </div>
                    <div className="trade-entry-payment-entry-bottom-row-right">
                        <button className="trade-entry-payment-max-button">Max</button>
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
                        0.0 aUSDC
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
    )
}

export default TradeEntryModal