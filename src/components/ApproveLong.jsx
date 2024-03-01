import { useState, useEffect } from "react"
import { useAccount, useReadContract } from 'wagmi'
import {testnetUSDCContractConfig, testnetREPOContractConfig} from '../../abis'
import { config } from '../main'
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi' 
import { parseEther } from 'viem' 

const ApproveLong = ({setApproved, approved, value}) => {
    let { data: hash, isPending, writeContract } = useWriteContract() 
    
    async function submitApproval(e) { 
        e.preventDefault() 
        writeContract({ 
            address: testnetUSDCContractConfig.address, 
            abi: testnetUSDCContractConfig.abi, 
            functionName: 'approve', 
            args: [testnetREPOContractConfig.address, value], 
        })
    }
    
    const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
      hash, 
    }) 

    useEffect(() => {
      setApproved(hash)
    }, [isConfirmed])

    return(
        <form onSubmit={submitApproval}> 
          <button type="submit">Approve</button>
          {hash && <div><div className="transaction-details">Transaction Hash:</div><div className="transaction-details">{hash}</div></div>}
          {isConfirming && <div className="transaction-details">Waiting for confirmation...</div>} 
          {isConfirmed &&  approved && <div className="transaction-details">Transaction confirmed.</div>} 
        </form>
    )
}

export default ApproveLong