import React from "react"
import { useState, useEffect } from "react"
import { useAccount, useReadContract } from 'wagmi'
import {testnetUSDCContractConfig, testnetREPOContractConfig} from '../../abis'
import { config } from '../main'
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi' 
import { parseEther } from 'viem' 
import ApproveRLP from "./ApproveRLP"
import DepositRLP from "./DepositRLP"

const BuyRLP = () => {
    console.log(testnetREPOContractConfig)
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

    return (
        <div className="buy-rlp-container">
            {
            approved === null &&
                <ApproveRLP setApproved={setApproved}/>
            }
            {
            approved !== null &&
                <DepositRLP  address={address} setDepositTxHash={setDepositTxHash} setShowTransactionHash={setShowTransactionHash}/>
            }
            {
                showTransactionHash === true &&
                <div className="transaction-hash"> Transaction Hash: {depositTxHash}</div>
            }
        </div>
    )
}

export default BuyRLP