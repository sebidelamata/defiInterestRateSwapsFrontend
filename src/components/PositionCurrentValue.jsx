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
    console.log(testnetOracleContractConfig.address)
    console.log(currentPriceFetch)
    let mockFetch = 0.97
    let calculatedCurrentValue = (mockFetch * collateral) - repurchase
    setCurrentValue(calculatedCurrentValue)
    
    return(
        <div>{`${currentValue} USDC`}</div>
    )
}

export default PositionCurrentValue