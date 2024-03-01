import { useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { useState, useEffect } from "react"
import {testnetREPOContractConfig} from '../../abis'

const RepoLendAssetLend = ({assetString, config, value}) => {

    let { data: hash, isPending, writeContract } = useWriteContract() 
     
    async function submitLend(e) { 
        e.preventDefault() 
        writeContract({ 
            address: config.address, 
            abi: config.abi, 
            functionName: 'deposit', 
            args: [config.address, value], 
        })
    }
        
    const { isLoading: isConfirming, isSuccess: isConfirmed } = 
        useWaitForTransactionReceipt({ 
          hash, 
        }) 

        // useEffect(() => {
        //     if (isConfirmed && typeof setApproved === 'function') {
        //         setApproved(hash);
        //     }
        // }, [isConfirmed])

    return(
        <form onSubmit={submitLend}> 
            <button type="submit">{`Deposit ${assetString}`}</button>
            {hash && <div className="transaction-details">Transaction Hash: {hash}</div>}
            {isConfirming && <div className="transaction-details">Waiting for confirmation...</div>} 
            {isConfirmed &&  hash && <div className="transaction-details">Transaction confirmed.</div>} 
        </form>
    )
}

export default RepoLendAssetLend