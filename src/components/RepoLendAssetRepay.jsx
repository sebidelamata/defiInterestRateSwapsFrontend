import { useState, useEffect } from "react"
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { testnetFixedYieldCollateralVaultConfig, testnetREPOContractConfig } from "../../abis"

const RepoLendAssetRepay = ({assetString, config, value, address}) => {
    let { data: hash, isPending, writeContract } = useWriteContract() 
    console.log(testnetFixedYieldCollateralVaultConfig)
    async function submitApproval(e) { 
        e.preventDefault() 
        writeContract({ 
            address: testnetREPOContractConfig.address, 
            abi: testnetREPOContractConfig.abi, 
            functionName: 'repurchase', 
            args: [address, 'index'], 
        })
    }
        
        const { isLoading: isConfirming, isSuccess: isConfirmed } = 
        useWaitForTransactionReceipt({ 
          hash, 
        }) 

        useEffect(() => {
            if (isConfirmed) {
                console.log('repay success')
            }
        }, [isConfirmed])
    
    return(
        <form onSubmit={submitApproval}> 
            <button type="submit">{`Repay ${assetString}`}</button>
            {hash && <div className="transaction-details">Transaction Hash: {hash}</div>}
            {isConfirming && <div className="transaction-details">Waiting for confirmation...</div>} 
            {isConfirmed && <div className="transaction-details">Transaction confirmed.</div>} 
        </form>
    )
}

export default RepoLendAssetRepay