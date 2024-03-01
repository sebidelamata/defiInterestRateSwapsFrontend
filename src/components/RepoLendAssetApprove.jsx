import { useState, useEffect } from "react"
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi"

const RepoLendAssetApprove = ({config, approved, setApproved, value}) => {
        
    let { data: hash, isPending, writeContract } = useWriteContract() 
        
    async function submitApproval(e) { 
        e.preventDefault() 
        writeContract({ 
            address: config.address, 
            abi: config.abi, 
            functionName: 'approve', 
            args: [config.address, value], 
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
            {hash && <div>Transaction Hash: {hash}</div>}
            {isConfirming && <div>Waiting for confirmation...</div>} 
            {isConfirmed &&  approved && <div>Transaction confirmed.</div>} 
        </form>
    )
}

export default RepoLendAssetApprove