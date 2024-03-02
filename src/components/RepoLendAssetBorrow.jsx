import { useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { useState, useEffect } from "react"
import {testnetREPOContractConfig, testnetUSDCContractConfig} from '../../abis'

const RepoLendAssetBorrow = ({assetString, config, value, usdcBalance, address}) => {
    console.log(config)
    let { data: hash, isPending, writeContract } = useWriteContract() 
    
    async function submitBorrow(e) { 
        e.preventDefault() 
        writeContract({ 
            address: testnetREPOContractConfig.address, 
            abi: testnetREPOContractConfig.abi, 
            functionName: 'borrow', 
            args: [value, 86400, address], 
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
        <form onSubmit={submitBorrow}> 
            <button type="submit">{`Borrow ${assetString}`}</button>
            {hash && <div>Transaction Hash: {hash}</div>}
            {isConfirming && <div>Waiting for confirmation...</div>} 
            {isConfirmed &&  hash && <div>Transaction confirmed.</div>} 
        </form>
    )
}

export default RepoLendAssetBorrow