import { useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { testnetUSDCContractConfig, testnetREPOContractConfig } from "../../abis"

const ExecuteTradeButton = ({leverage, payValue}) => {

    let { data: hashApprove, isPending, writeContract } = useWriteContract() 
    
    async function submitApproval(e) { 
        e.preventDefault() 
        writeContract({ 
            address: testnetUSDCContractConfig.address, 
            abi: testnetUSDCContractConfig.abi, 
            functionName: 'approve', 
            args: [testnetREPOContractConfig.address, (leverage*payValue)*10**6], 
        }) 
    }

    const { isLoading: isConfirming, isSuccess: isConfirmed } = 
        useWaitForTransactionReceipt({ 
        hashApprove, 
    }) 

    return(
        <form onSubmit={submitApproval}>
            <button className="execute-trade-button" type="submit">Long aUSDC Rates</button>
            {hashApprove && <div>Transaction Hash: {hashApprove}</div>}
            {isConfirming && <div>Waiting for confirmation...</div>} 
            {isConfirmed && <div>Transaction confirmed.</div>} 
        </form>
    )
}

export default ExecuteTradeButton