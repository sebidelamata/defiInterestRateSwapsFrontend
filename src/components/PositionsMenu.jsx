import { useState, useEffect } from "react"
import { testnetREPOContractConfig, testnetUSDCContractConfig } from "../../abis"
import IndividualPositionRow from "./IndividualPositionRow"

const PositionsMenu = () => {
    const [selectedPostion, setSelectedPosition] = useState('Positions')
    // let { address, isConnecting, isDisconnected } = useAccount(config)

    // let userPositionsLengthFetch = useReadContract({
    //     abi: testnetREPOContractConfig.abi,
    //     address: testnetREPOContractConfig.address,
    //     functionName: 'loans',
    //     args: [address],
    //     watch: true,
    //     chainId:14997,
    // })
    // userPositionsLengthFetch = parseInt(userPositionsLengthFetch.data)
    // this below is a placeholder
    let userPositionsLengthFetch = 0

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
                        <li className="positions-table-headers-net-value">Net Value</li>
                        <li className="positions-table-headers-collateral">Collateral</li>
                        <li className="positions-table-headers-expiry">Expiry</li>
                   </ul>
                   <ul className="position-rows-list">
                        {
                            userPositionsLengthFetch === 0 || isNaN(userPositionsLengthFetch) &&
                            <div>No Open Positions</div>
                        }
                        {
                            userPositionsLengthFetch !== 0 &&
                            typeof(userPositionsLengthFetch) === 'number' &&
                            Array.from({length: userPositionsLengthFetch}, (_, index) => (
                                <li key={`position_${index}`}>
                                    <IndividualPositionRow positionNumber={index + 1} address={address}/>
                                </li>
                            ))
                        }
                   </ul>
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
                   <div className="orders-table-body-no-positions">No Open Orders</div>
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