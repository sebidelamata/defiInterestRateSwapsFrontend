import { useEffect } from "react"
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { testnetEthereumVaultConnectorConfig } from "../../abis"

const NavbarApproveEVC = ({address, setAccountApproveState}) => {
    
    let { data: hash, isPending, writeContract } = useWriteContract() 

    async function submitApprove(e) { 
        e.preventDefault() 
        writeContract({ 
            address: testnetEthereumVaultConnectorConfig.address, 
            abi: testnetEthereumVaultConnectorConfig.abi, 
            functionName: 'setAccountOperator', 
            args: [address, testnetEthereumVaultConnectorConfig.address, true], 
        })
    }
        
    const { isLoading: isConfirming, isSuccess: isConfirmed } = 
        useWaitForTransactionReceipt({ 
          hash, 
        }) 
        console.log(isConfirmed)
    useEffect(() => {
        if(isConfirmed === true){
            setAccountApproveState('approved')
        }
    }, [isConfirmed])
    return(
        <form onSubmit={submitApprove}> 
            <button type="submit">Approve Account</button>
            {hash && <div className="transaction-hash">Transaction Hash: {hash}</div>}
            {isConfirming && <div className="transaction-hash">Waiting for confirmation...</div>} 
            {isConfirmed &&  hash && <div className="transaction-hash">Transaction confirmed.</div>} 
        </form>
    )
}

export default NavbarApproveEVC