import { useState, useEffect } from "react"
import { useAccount, useReadContract } from 'wagmi'
import {testnetUSDCContractConfig, testnetREPOContractConfig} from '../../abis'
import { config } from '../main'
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi' 
import { parseEther } from 'viem' 

const ApproveGLP = ({address, approved, setApproved, allowanceData}) => {
    let { data: hash, isPending, writeContract } = useWriteContract() 
    
    async function submitApproval(e) { 
        e.preventDefault() 
        const formData = new FormData(e.target) 
        const value = formData.get('value')
        writeContract({ 
            address: testnetREPOContractConfig.address, 
            abi: testnetREPOContractConfig.abi, 
            functionName: 'approve', 
            args: [testnetREPOContractConfig.address, parseEther(value)], 
          }) 
    }
    
    const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
      hash, 
    }) 

    return(
        <form onSubmit={submitApproval}> 
                <input name="value" placeholder={(parseInt(allowanceData.data) * 10**-18).toFixed(2)} required />
                <button type="submit">Approve</button>
                {hash && <div>Transaction Hash: {hash}</div>}
                {isConfirming && <div>Waiting for confirmation...</div>} 
                {isConfirmed &&  setApproved(hash)&& <div>Transaction confirmed.</div>} 
                </form>
    )
}

export default ApproveGLP