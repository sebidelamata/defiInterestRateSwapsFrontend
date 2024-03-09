import React from "react"
import { useState, useEffect } from "react"
import { useAccount, useReadContract } from 'wagmi'
import {testnetUSDCContractConfig, testnetREPOContractConfig} from '../../abis'
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi' 
import { parseEther } from 'viem' 
import ApproveRLP from "./ApproveRLP"
import DepositRLP from "./DepositRLP"

const BuyRLP = () => {
    let { address, isConnecting, isDisconnected } = useAccount(config)
    let [approved, setApproved] = useState(null)

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
                <DepositRLP  address={address}/>
            }
        </div>
    )
}

export default BuyRLP