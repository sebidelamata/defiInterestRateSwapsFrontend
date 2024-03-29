import { useState, useEffect } from "react"
import { useAccount, useReadContract } from 'wagmi'
import {testnetUSDCContractConfig, testnetREPOContractConfig} from '../../abis'
import { config } from '../main'
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi' 
import { parseEther } from 'viem' 

const ReedemRLP = ({address}) => {

    let { data: hash, error, isPending, writeContract } = useWriteContract() 
    //
    async function submitRedeem(e) { 
        e.preventDefault() 
        const formData = new FormData(e.target) 
        const value = formData.get('value')
        writeContract({ 
            address: testnetREPOContractConfig.address, 
            abi: testnetREPOContractConfig.abi, 
            functionName: 'redeem', 
            args: [value*10**6, address, address]
          }) 
        // setDepositTxHash(hash)
        // setShowTransactionHash(true)
        
    }

    const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
      hash, 
    })


    
    {isPending && 'pending...'} 
    {isConfirming && <div>Waiting for confirmation...</div>} 
    {isConfirmed && <div>Transaction confirmed.</div>} 

    return(
        <form onSubmit={submitRedeem}> 
            <input name="value" placeholder='0' required />
            <button type="submit" disabled={isPending} >Sell $RLP</button>
            {hash && <div>Transaction Hash: {hash}</div>}
            {isConfirming && <div>Waiting for confirmation...</div>} 
            {isConfirmed && <div>Transaction confirmed.</div>} 
        </form>
    )
    
}

export default ReedemRLP