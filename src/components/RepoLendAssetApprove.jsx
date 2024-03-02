import { useState, useEffect } from "react"
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { testnetFixedYieldCollateralVaultConfig } from "../../abis"

const RepoLendAssetApprove = ({config, approved, setApproved, value, decimals}) => {
        
    let { data: hash, isPending, writeContract } = useWriteContract() 
    
    async function submitApproval(e) { 
        e.preventDefault() 
        writeContract({ 
            address: config.address, 
            abi: config.abi, 
            functionName: 'approve', 
            args: [testnetFixedYieldCollateralVaultConfig.address, value * 10**decimals], 
        })
    }
        
        const { isLoading: isConfirming, isSuccess: isConfirmed } = 
        useWaitForTransactionReceipt({ 
          hash, 
        }) 

        useEffect(() => {
            if (isConfirmed && typeof setApproved === 'function') {
                setApproved(hash);
            }
        }, [isConfirmed])
    
    return(
        <form onSubmit={submitApproval}> 
            <button type="submit">Approve</button>
            {hash && <div className="transaction-details">Transaction Hash: {hash}</div>}
            {isConfirming && <div className="transaction-details">Waiting for confirmation...</div>} 
            {isConfirmed &&  approved && <div className="transaction-details">Transaction confirmed.</div>} 
        </form>
    )
}

export default RepoLendAssetApprove