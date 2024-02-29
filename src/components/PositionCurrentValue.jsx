import { useState, useEffect } from "react"
import { useReadContract } from "wagmi"
import { testnetOracleContractConfig } from "../../abis"

const PositionCurrentValue = ({repurchase, collateral}) => {

    const [currentValue, setCurrentValue] = useState(null)
    
    const currentPriceFetch = useReadContract({
        abi: testnetOracleContractConfig.abi,
        address: testnetOracleContractConfig.address,
        functionName: 'getPtPrice',
        args: [],
        watch: true,
        chainId:14997,
    })
    console.log(currentPriceFetch)

    useEffect(() => {
        if(currentPriceFetch.data !== null && currentPriceFetch.data === undefined){
            let calculatedCurrentValue = (currentPriceFetch * collateral) - repurchase
            setCurrentValue(calculatedCurrentValue)
        }
    },[currentPriceFetch.data])
    
    return(
        <div></div>
        // <div>{`${currentValue} USDC`}</div>
    )
}

export default PositionCurrentValue