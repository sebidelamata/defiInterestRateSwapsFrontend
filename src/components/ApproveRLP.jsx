import { useState, useEffect } from "react"
import { useAccount, useReadContract } from 'wagmi'
import {testnetUSDCContractConfig, testnetREPOContractConfig} from '../../abis'
import { config } from '../main'
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi' 
import { parseEther } from 'viem' 

const ApproveRLP = ({setApproved}) => {
    let { data: hash, isPending, writeContract } = useWriteContract() 
    
    async function submitApproval(e) { 
        e.preventDefault() 
        const formData = new FormData(e.target) 
        const value = formData.get('value')
        console.log(value)
        writeContract({ 
            address: testnetUSDCContractConfig.address, 
            abi: testnetUSDCContractConfig.abi, 
            functionName: 'approve', 
            args: [testnetREPOContractConfig.address, value*10**6], 
        }) 
    }
    
    const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
      hash, 
    }) 

    useEffect(() => {
      if (isConfirmed === true) {
        setApproved(hash);
    }
    }, [isConfirmed])

    return(
        <form onSubmit={submitApproval}> 
          <input name="value" placeholder={0} required />
          <button type="submit">Approve</button>
          <div className="transaction-details">
            {hash && <div>Transaction Hash: {hash}</div>}
            {isConfirming && <div>Waiting for confirmation...</div>} 
            {isConfirmed && <div>Transaction confirmed.</div>} 
          </div>
        </form>
    )
}

export default ApproveRLP