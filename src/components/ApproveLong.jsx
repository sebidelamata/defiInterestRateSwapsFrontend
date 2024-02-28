import { useState, useEffect } from "react"
import { useAccount, useReadContract } from 'wagmi'
import {testnetUSDCContractConfig, testnetREPOContractConfig} from '../../abis'
import { config } from '../main'
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi' 
import { parseEther } from 'viem' 

const ApproveLong = ({setApproved, value}) => {
    let { data: hash, isPending, writeContract } = useWriteContract() 
    
    async function submitApproval(e) { 
        e.preventDefault() 
        writeContract({ 
            address: testnetUSDCContractConfig.address, 
            abi: testnetUSDCContractConfig.abi, 
            functionName: 'approve', 
            args: [testnetREPOContractConfig.address, value], 
        })
        setApproved(null) 
    }
    
    const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
      hash, 
    }) 

    return(
        <form onSubmit={submitApproval}> 
          <button type="submit">Approve</button>
          {hash && <div>Transaction Hash: {hash}</div>}
          {isConfirming && <div>Waiting for confirmation...</div>} 
          {isConfirmed &&  setApproved(hash)&& <div>Transaction confirmed.</div>} 
        </form>
    )
}

export default ApproveLong