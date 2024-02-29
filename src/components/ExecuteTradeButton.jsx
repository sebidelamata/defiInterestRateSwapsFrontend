import { useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { testnetUSDCContractConfig, testnetREPOContractConfig } from "../../abis"
import { useEffect, useState } from "react"
import ApproveLong from "./ApproveLong"

const ExecuteTradeButton = ({leverage, payValue, positionTerm}) => {
    const [approved, setApproved] = useState(null)
    let { data: hashApprove, isPending, writeContract } = useWriteContract() 
    
    async function submitLong(e) { 
        e.preventDefault() 
        writeContract({ 
            address: testnetREPOContractConfig.address, 
            abi: testnetREPOContractConfig.abi, 
            functionName: 'goLong', 
            args: [(leverage*payValue)*10**6, positionTerm, 0.1*(leverage*payValue)*10**6], 
        }) 
    }
    const { isLoading: isConfirming, isSuccess: isConfirmed } = 
        useWaitForTransactionReceipt({ 
        hashApprove, 
    })
    
    useEffect(() => {
        setApproved(null)
    }, [hashApprove])

    return(
        <div>
            {
            approved === null &&
                <ApproveLong setApproved={setApproved} approved={approved} value={(leverage*payValue)*10**6}/>
            }
            {
                approved !== null &&
                <form onSubmit={submitLong}>
                    <button className="execute-trade-button" type="submit">Short aUSDC Rates</button>
                    <div className="transaction-details">
                        {hashApprove && <div className="transaction-details">Transaction Hash: {hashApprove}</div>}
                        {isConfirming && <div className="transaction-details">Waiting for confirmation...</div>} 
                        {isConfirmed && <div className="transaction-details">Transaction confirmed.</div>} 
                    </div>
                </form>
            }
        </div>
        
    )
}

export default ExecuteTradeButton