import { useEffect, useState } from "react"
import { testnetEthereumVaultConnectorConfig, testnetRepoPlatformOperatorConfig } from "../../abis"
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { ethers } from "ethers"
import { useEVC, useProvider } from "../../EthersContextProvider"


const NavbarApproveEVC = ({ setAccountApproveState }) => {
    
    const [approve, setApprove] = useState(null)

    const { address, chainId, isConnected } = useWeb3ModalAccount()
    const { walletProvider } = useWeb3ModalProvider()

    const EVC = useEVC()
    const provider = useProvider()

    // useEffect(() => {
    //     if (isConnected) {
    //         const abi = testnetEthereumVaultConnectorConfig.abi
    //         const contractAddress = testnetEthereumVaultConnectorConfig.address
    //         setApprove(new ethers.Contract(contractAddress, abi, isConnected.getSigner()))
    //     }
    // }, [walletProvider])

    const submitApprove = async (e) => {
        e.preventDefault() 
        
        const signer = await provider.getSigner()
        console.log('start')
        // Inspector updates status
        const transaction = await EVC.connect(signer).setAccountOperator(
            address, 
            testnetRepoPlatformOperatorConfig.address, 
            true
        )
        await transaction.wait()
        console.log('done')

    }
    // useEffect(() => {
    //     if(isConfirmed === true){
    //         setAccountApproveState('approved')
    //     }
    // }, [isConfirmed])

    return(
        <form onSubmit={submitApprove}> 
            <button type="submit">Approve Account</button>
            {/* {hash && <div className="transaction-hash">Transaction Hash: {hash}</div>}
            {isConfirming && <div className="transaction-hash">Waiting for confirmation...</div>} 
            {isConfirmed &&  hash && <div className="transaction-hash">Transaction confirmed.</div>}  */}
        </form>
    )
}

export default NavbarApproveEVC