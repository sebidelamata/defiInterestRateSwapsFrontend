import { useState } from "react"

const PositionsMenu = () => {
    const [selectedPostion, setSelectedPosition] = useState('Positions')

    return(
        <div className="positions-menu">
            <ul className="positions-menu-selectors">
                <li className="positions-menu-positions" onClick={() => setSelectedPosition('Positions')}>Positions</li>
                <li className="position-menu-orders" onClick={() => setSelectedPosition('Orders')}>Orders</li>
                <li className="positions-menu-trades" onClick={() => setSelectedPosition('Trades')}>Trades</li>
            </ul>
            {
                selectedPostion === 'Positions' &&
                <div className="positions-table">
                   <ul className="positions-table-headers">
                        <li className="positions-table-headers-position">Position</li>
                        <li className="positions-table-headers-net-value">Net Value</li>
                        <li className="positions-table-headers-size">Size</li>
                        <li className="positions-table-headers-collateral">Collateral</li>
                        <li className="positions-table-headers-entry-price">Entry Price</li>
                        <li className="positions-table-headers-mark-price">Mark Price</li>
                        <li className="positions-table-headers-liq-price">Liquidation Price</li>
                   </ul>
                   <div className="positions-table-body-no-positions">No open positions</div>
                </div>
            }
            {
                selectedPostion === 'Orders' &&
                <div className="orders-table">
                    <ul className="orders-table-headers">
                        <li className="orders-table-headers-type">Type</li>
                        <li className="orders-table-headers-order">Order</li>
                        <li className="orders-table-headers-price">Price</li>
                        <li className="orders-table-headers-mark-price">Mark Price</li>
                   </ul>
                   <div className="orders-table-body-no-positions">No open positions</div>
                </div>
            }
            {
                selectedPostion === 'Trades' &&
                <ul className="past-trades-list">
                    <div className="past-trades-no-past-trades"></div>
                </ul>
            }
        </div>
    )
}

export default PositionsMenu