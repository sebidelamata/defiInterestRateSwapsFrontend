import { useEffect, useState } from "react"
import { testnetEthereumVaultConnectorConfig, testnetRepoPlatformOperatorConfig } from "../../abis"
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { BrowserProvider, Contract, formatUnits } from 'ethers'
import { ethers } from "ethers"


const NavbarApproveEVC = ({address, setAccountApproveState, isConnected}) => {
    
    const [approve, setApprove] = useState(null)
    const { walletProvider } = useWeb3ModalProvider()
    const ethersProvider = new BrowserProvider(walletProvider)
    console.log(ethersProvider)

    console.log(isConnected)

    if (isConnected) {
                const abi = testnetEthereumVaultConnectorConfig.abi
                const contractAddress = testnetEthereumVaultConnectorConfig.address
                setApprove(new ethers.Contract(contractAddress, abi, isConnected.getSigner()))
            }

    // useEffect(() => {
    //     if (isConnected) {
    //         const abi = testnetEthereumVaultConnectorConfig.abi
    //         const contractAddress = testnetEthereumVaultConnectorConfig.address
    //         setApprove(new ethers.Contract(contractAddress, abi, isConnected.getSigner()))
    //     }
    // }, [walletProvider])

    const submitApprove = async (e) => {
        e.preventDefault() 
        await setApprove.setAccountOperator(
            testnetRepoPlatformOperatorConfig.address,
            true
        )
        alert('Your transaction has been submitted')
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