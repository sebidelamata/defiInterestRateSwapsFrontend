import React from "react"
import { useState } from "react"
import { useAccount, useReadContract } from 'wagmi'
import {testnetUSDCContractConfig, testnetREPOContractConfig} from '../../abis'
import { config } from '../main'
import { useWriteContract } from 'wagmi' 
import { parseEther } from 'viem' 

const BuyRLP = () => {
    let { address, isConnecting, isDisconnected } = useAccount(config)
    let [approved, setApproved] = useState(null)
    let [depositTxHash, setDepositTxHash] = useState(null)
    let [showTransactionHash, setShowTransactionHash] = useState(false)

    const allowanceData = useReadContract({
        address: testnetREPOContractConfig.address,
        abi: testnetREPOContractConfig.abi,
        functionName: "allowance",
        args: [address, testnetREPOContractConfig.address],
        watch: true,
        chainId:14997,
      });

    const { data: hash, writeContract } = useWriteContract() 
    
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
        setApproved(hash)
    } 

    async function submitDeposit(e) { 
        e.preventDefault() 
        const formData = new FormData(e.target) 
        const value = formData.get('value')
        writeContract({ 
            address: testnetREPOContractConfig.address, 
            abi: testnetREPOContractConfig.abi, 
            functionName: 'deposit', 
            args: [parseEther(value), address], 
          }) 
        setApproved(null)
        setShowTransactionHash(true)
        setDepositTxHash(hash)
    } 
    

    return (
        <div className="buy-rlp-container">
            {
            approved === null &&
                <form onSubmit={submitApproval}> 
                <input name="value" placeholder={(parseInt(allowanceData.data) * 10**-18).toFixed(2)} required />
                <button type="submit">Approve</button>
                </form>
            }
            {
            approved !== null &&
                <form onSubmit={submitDeposit}> 
                <input name="value" placeholder='0' required />
                <button type="submit">Buy $RLP</button>
                </form>
            }
            {
                    showTransactionHash === true &&
                    <div className="transaction-hash"> Transaction Hash: {depositTxHash}</div>
            }
        </div>
    )
}

export default BuyRLP