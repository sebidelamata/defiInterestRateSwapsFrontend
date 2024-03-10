import { useState, useEffect } from "react"
import { testnetUSDCContractConfig, testnetREPOContractConfig } from "../../abis"
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { ethers } from "ethers"
import { 
  useProvider, 
  useUSDC, 
  useRepoVaultBorrowable 
} from "../../EthersContextProvider"

const ApproveRLP = ({setApproved}) => {

  const { address, chainId, isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider()

  const provider = useProvider()
  const usdc = useUSDC()
  const repoVaultBorrowable = useRepoVaultBorrowable()
    
  async function submitApproval(e) { 
      e.preventDefault() 
      const formData = new FormData(e.target) 
      const value = formData.get('value')

      const signer = await provider.getSigner()
      
      // Approve usdc spend
      
      let transaction = await usdc.connect(signer).approve(
          testnetREPOContractConfig.address,
          value*10**6
      )
      await transaction.wait()
      console.log(transaction)

      // Deposit USDC
      
      transaction = await repoVaultBorrowable.connect(signer).deposit(
        value*10**6,
        address
    )
    await transaction.wait()
    console.log(transaction)

      
  }
  
  // const { isLoading: isConfirming, isSuccess: isConfirmed } = 
  // useWaitForTransactionReceipt({ 
  //   hash, 
  // }) 

  useEffect(() => {
  //   if (isConfirmed === true) {
  //     setApproved(hash);
  // }
  }, [])

  return(
      <form onSubmit={submitApproval}> 
        <input name="value" placeholder={0} required />
        <button type="submit">Approve</button>
        <div className="transaction-details">
          {/* {hash && <div>Transaction Hash: {hash}</div>}
          {isConfirming && <div>Waiting for confirmation...</div>} 
          {isConfirmed && <div>Transaction confirmed.</div>}  */}
        </div>
      </form>
  )
}

export default ApproveRLP