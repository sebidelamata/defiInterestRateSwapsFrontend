import { useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { testnetUSDCContractConfig, testnetREPOContractConfig } from "../../abis"
import { useState } from "react"
import ApproveLong from "./ApproveLong"

const ExecuteTradeButton = ({leverage, payValue}) => {
    //console.log(testnetREPOContractConfig.abi)
    const [approved, setApproved] = useState(null)
    let { data: hashApprove, isPending, writeContract } = useWriteContract() 
    
    async function submitLong(e) { 
        e.preventDefault() 

        writeContract({ 
            address: testnetREPOContractConfig.address, 
            abi: testnetREPOContractConfig.abi, 
            functionName: 'goLong', 
            args: [(leverage*payValue)*10**6, 1440*60, 0.1*(leverage*payValue)*10**6], 
        }) 
    }
    const { isLoading: isConfirming, isSuccess: isConfirmed } = 
        useWaitForTransactionReceipt({ 
        hashApprove, 
    }) 

    return(
        <div>
            {
            approved === null &&
                <ApproveLong setApproved={setApproved} value={(leverage*payValue)*10**6}/>
            }
            {
                approved !== null &&
                <form onSubmit={submitLong}>
                    <button className="execute-trade-button" type="submit">Long aUSDC Rates</button>
                    {hashApprove && <div>Transaction Hash: {hashApprove}</div>}
                    {isConfirming && <div>Waiting for confirmation...</div>} 
                    {isConfirmed && <div>Transaction confirmed.</div>} 
                </form>
            }
        </div>
        
    )
}

export default ExecuteTradeButton