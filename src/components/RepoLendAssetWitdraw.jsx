import { useState, useEffect } from "react"
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { testnetFixedYieldCollateralVaultConfig } from "../../abis"

const RepoAssetLendWithdraw = ({assetString, config, value, address}) => {
    let { data: hash, isPending, writeContract } = useWriteContract() 
    
    async function submitWithdraw(e) { 
        e.preventDefault() 
        writeContract({ 
            address: testnetFixedYieldCollateralVaultConfig.address, 
            abi: testnetFixedYieldCollateralVaultConfig.abi, 
            functionName: 'withdraw', 
            args: [value, address, address], 
        })
    }
        
        const { isLoading: isConfirming, isSuccess: isConfirmed } = 
        useWaitForTransactionReceipt({ 
          hash, 
        }) 

        useEffect(() => {
            if (isConfirmed) {
                console.log('success withdraw');
            }
        }, [isConfirmed])
    
    return(
        <form onSubmit={submitWithdraw}> 
            <button type="submit">Withdraw</button>
            {hash && <div className="transaction-details">Transaction Hash: {hash}</div>}
            {isConfirming && <div className="transaction-details">Waiting for confirmation...</div>} 
            {isConfirmed &&  <div className="transaction-details">Transaction confirmed.</div>} 
        </form>
    )
}

export default RepoAssetLendWithdraw
