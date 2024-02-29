import { useAccount, useReadContract } from "wagmi"
import { testnetREPOContractConfig, testnetUSDCContractConfig } from "../../abis"
import { config } from "../main"
import { useState, useEffect } from "react"
import { DateTime } from "luxon";
import PositionCurrentValue from "./PositionCurrentValue";

const IndividualPositionRow = ({positionNumber, address}) => {

    const [collateralRepurchaseExpiry, setCollateralRepurchaseExpiry] = useState([])

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
            setCollateralRepurchaseExpiry([collateralAmount, repurchasePrice, termExpires])
        }
    }, [userPositionFetch.data])

    return(
        <ul className="single-position-list">
            <li className="single-position-repurchase-price">
                <PositionCurrentValue repurchase={collateralRepurchaseExpiry[1]} collateral={collateralRepurchaseExpiry[0]}/>
            </li>
            <li className="single-position-repurchase-price">{collateralRepurchaseExpiry[1] || 'error'}</li>
            <li className="single-position-collateral">{collateralRepurchaseExpiry[0] || 'error'}</li>
            <li className="single-position-expiry">{collateralRepurchaseExpiry[2] || 'error'}</li>
        </ul>
    )
}

export default IndividualPositionRow