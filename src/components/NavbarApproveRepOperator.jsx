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
            functionName: 'setAccountOperator', 
            args: [address, testnetRepoPlatformOperatorConfig.address, true], 
        })
    }
        
    const { isLoading: isConfirming, isSuccess: isConfirmed } = 
        useWaitForTransactionReceipt({ 
          hash, 
        }) 

    useEffect(() => {
        if(isConfirmed === true){
            setAccountApproveState('approved')
        }
    }, [hash])
    return(
        <form onSubmit={submitApprove}> 
            <button type="submit">Approve Account</button>
            {hash && <div>Transaction Hash: {hash}</div>}
            {isConfirming && <div>Waiting for confirmation...</div>} 
            {isConfirmed &&  hash && <div>Transaction confirmed.</div>} 
        </form>
    )
}

export default NavbarApproveRepOperator