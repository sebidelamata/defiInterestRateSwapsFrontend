import { useAccount, useReadContract } from "wagmi"
import { testnetREPOContractConfig, testnetUSDCContractConfig } from "../../abis"
import { config } from "../main"
import { useState, useEffect } from "react"
import { DateTime } from "luxon";
import PositionCurrentValue from "./PositionCurrentValue";

const IndividualPositionRow = ({positionNumber}) => {

    let { address, isConnecting, isDisconnected } = useAccount(config)
    const [collateral, setCollateral] = useState(null)
    const [repurchase, setRepurchase] = useState(null)
    const [expiry, setExpiry] = useState(null)

    
    const userPositionFetch = useReadContract({
        abi: testnetREPOContractConfig.abi,
        address: testnetREPOContractConfig.address,
        functionName: 'repos',
        args: [address, positionNumber],
        watch: true,
        chainId:14997,
    })
    useEffect(() => {
        if (userPositionFetch.data !== null && userPositionFetch.data !== undefined) {
            let [collateralAmount, repurchasePrice, termExpires] = userPositionFetch.data.map(value => parseInt(value));
            termExpires = termExpires * 1000
            termExpires = new Date(termExpires)
            termExpires = termExpires.toLocaleString(DateTime.DATE_MED)
            collateralAmount = collateralAmount * 10**-6
            repurchasePrice = repurchasePrice * 10**-6
            setCollateral(collateralAmount);
            setRepurchase(repurchasePrice);
            setExpiry(termExpires);
        }
    }, [userPositionFetch.data])


    return(
        <ul className="single-position-list">
            <li className="single-position-repurchase-price">
                <PositionCurrentValue repurchase={repurchase} collateral={collateral}/>
            </li>
            <li className="single-position-repurchase-price">{repurchase}</li>
            <li className="single-position-collateral">{collateral}</li>
            <li className="single-position-expiry">{expiry}</li>
        </ul>
    )
}

export default IndividualPositionRow