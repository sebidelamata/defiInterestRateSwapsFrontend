import { useEffect } from "react"
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { testnetRepoPlatformOperatorConfig } from "../../abis"

const NavbarApproveRepOperator = ({address, setAccountApproveState}) => {
    
    let { data: hash, isPending, writeContract } = useWriteContract() 

    async function submitApprove(e) { 
        e.preventDefault() 
        writeContract({ 
            address: testnetRepoPlatformOperatorConfig.address, 
            abi: testnetRepoPlatformOperatorConfig.abi, 
            functionName: 'approveAllVaultsOnBehalfOf', 
            args: [address], 
        })
    }
        
    const { isLoading: isConfirming, isSuccess: isConfirmed } = 
        useWaitForTransactionReceipt({ 
          hash, 
        }) 

    useEffect(() => {
        if(isConfirmed === true){
            setAccountApproveState('vaultApproved')
        }
    }, [isConfirmed])
    return(
        <form onSubmit={submitApprove}> 
            <button type="submit">Approve Vault</button>
            {hash && <div className="transaction-hash">Transaction Hash: {hash}</div>}
            {isConfirming && <div className="transaction-hash">Waiting for confirmation...</div>} 
            {isConfirmed &&  hash && <div className="transaction-hash">Transaction confirmed.</div>} 
        </form>
    )
}

export default NavbarApproveRepOperator