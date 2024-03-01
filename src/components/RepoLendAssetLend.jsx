import { useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { useState, useEffect } from "react"
import {testnetREPOContractConfig} from '../../abis'

const RepoLendAssetLend = ({assetString, config, value}) => {

    let { data: hash, isPending, writeContract } = useWriteContract() 
        console.log(config.abi)
    async function submitLend(e) { 
        e.preventDefault() 
        writeContract({ 
            address: config.address, 
            abi: config.abi, 
            functionName: 'approve', 
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
            {hash && <div>Transaction Hash: {hash}</div>}
            {isConfirming && <div>Waiting for confirmation...</div>} 
            {isConfirmed &&  hash && <div>Transaction confirmed.</div>} 
        </form>
    )
}

export default RepoLendAssetLend