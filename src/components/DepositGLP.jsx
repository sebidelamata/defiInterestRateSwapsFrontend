import { useState, useEffect } from "react"
import { useAccount, useReadContract } from 'wagmi'
import {testnetUSDCContractConfig, testnetREPOContractConfig} from '../../abis'
import { config } from '../main'
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi' 
import { parseEther } from 'viem' 

const DepositRLP = ({address, setDepositTxHash, setShowTransactionHash}) => {

    let { data: hash, isPending, writeContract } = useWriteContract() 
    async function submitDeposit(e) { 
        e.preventDefault() 
        const formData = new FormData(e.target) 
        const value = formData.get('value')
        writeContract({ 
            address: testnetREPOContractConfig.address, 
            abi: testnetREPOContractConfig.abi, 
            functionName: 'deposit', 
            args: [1000, "0x8E11D12876633885629ffA329Eb7bdAb4AD0Cd3B"]
          }) 
          console.log(hash)
        setDepositTxHash(hash)
        setShowTransactionHash(true)
        
    }

    const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
      hash, 
    })


    
    {isPending && 'pending...'} 
    {isConfirming && <div>Waiting for confirmation...</div>} 
    {isConfirmed && <div>Transaction confirmed.</div>} 

    return(
        <form onSubmit={submitDeposit}> 
            <input name="value" placeholder='0' required />
            <button type="submit" disabled={isPending} >Buy $RLP</button>
        </form>
    )
    
}

export default DepositRLP