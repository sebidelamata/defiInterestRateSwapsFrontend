import { useState, useEffect } from "react"
import { useAccount, useReadContract } from 'wagmi'
import {testnetUSDCContractConfig, testnetREPOContractConfig} from '../../abis'
import { config } from '../main'
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi' 

const DepositRLP = ({address}) => {

    const { data: allowance, isLoading: isAllowanceLoading } = useReadContract({
        address: testnetUSDCContractConfig.address,
        abi: testnetUSDCContractConfig.abi,
        functionName: "allowance",
        args: [address, testnetREPOContractConfig.address],
        watch: true,
        chainId: 14997,
    });

    let { data: depositHash, isPending, writeContract } = useWriteContract() 
    async function submitDeposit(e) { 
        e.preventDefault() 
        const formData = new FormData(e.target) 
        const value = formData.get('value')

        const allowanceInWei = parseInt(allowance) * (10 ** 6);
        console.log(`allowance:${allowance} value:${value*(10**6)}`)
        if (value * (10 ** 6) > allowanceInWei) {
            console.error(`Insufficient allowance: allowance:${allowance} value:${value*(10**6)}`);
            return;
        }

        writeContract({ 
            address: testnetREPOContractConfig.address, 
            abi: testnetREPOContractConfig.abi, 
            functionName: 'deposit', 
            args: [value*(10**6), address]
        })
    }
    
    const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
        depositHash
    })

    {isPending && 'pending...'} 
    {isConfirming && <div className="transaction-details">Waiting for confirmation...</div>} 
    {isConfirmed && <div className="transaction-details">Transaction confirmed.</div>} 

    return(
        <form onSubmit={submitDeposit}> 
            <input name="value" placeholder={0} required />
            <button type="submit">Buy $RLP</button>
            <div className="transaction-details">
                {depositHash && <div>Transaction Hash: {depositHash}</div>}
                {isConfirming && <div>Waiting for confirmation...</div>} 
                {isConfirmed && <div>Transaction confirmed.</div>} 
            </div>
        </form>
    )
    
}

export default DepositRLP