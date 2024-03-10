import BuyRLP from "./BuyRLP"
import ReedemRLP from "./ReedeemRLP"
import EarnLPStaked from "./EarnLPStaked"
import { testnetREPOContractConfig, testnetUSDCContractConfig } from "../../abis"
import { useEffect, useState } from "react"
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { ethers } from "ethers"
import { useProvider, useUSDC } from "../../EthersContextProvider"

const EarnLPTokenModal = () => {

    const { address, chainId, isConnected } = useWeb3ModalAccount()
    const { walletProvider } = useWeb3ModalProvider()

    const provider = useProvider()
    const USDC = useUSDC()

    const [previewRedeem, setPreviewRedeem] = useState(null)
    const [numUserRLPShares, setNumUserRLPShares] = useState(null)

    //
    console.log(testnetREPOContractConfig.address)
    const numUserRLPSharesFetch = useReadContract({
        address: testnetREPOContractConfig.address,
        abi: testnetREPOContractConfig.abi,
        functionName: "balanceOf",
        args: [address],
        watch: true,
        chainId:14997,
      });
      console.log(numUserRLPSharesFetch)
    
      useEffect(() => {
        setNumUserRLPShares(numUserRLPSharesFetch.data)
      },[numUserRLPSharesFetch.data])
    console.log(numUserRLPShares + 'hi')
    
    return(
        <div className="earn-lp-token-modal">
            <ul className="earn-lp-token-modal-list">
                <li className="earn-lp-token-title">
                    $RLP
                </li>
                <li className="earn-lp-price-wallet-staked">
                    <div className="earn-lp-price">
                        <div className="earn-lp-price-title">Price:</div>
                        <div className="earn-lp-price-amount">{`${((parseInt(numUserRLPShares) * 10**-6) / parseInt(previewRedeem)) || '1.00'} $USDC`}</div>
                    </div>
                    <div className="earn-lp-wallet">
                        <div className="earn-lp-wallet-title">Wallet:</div>
                        <div className="earn-lp-wallet-amount">{`${parseInt(numUserRLPShares) * 10**-6} $RLP`}</div>
                    </div>
                    <EarnLPStaked numUserRLPShares={numUserRLPShares} previewRedeem={previewRedeem} setPreviewRedeem={setPreviewRedeem}/>
                </li>
                <li className="earn-lp-apr-rewards">
                    <div className="earn-lp-apr">
                        <div className="earn-lp-apr-title">APR:</div>
                        <div className="earn-lp-apr-amount">0%</div>
                    </div>
                    <div className="earn-lp-rewards">
                        <div className="earn-lp-rewards-title">Rewards:</div>
                        <div className="earn-lp-rewards-amount">0 USDC</div>
                    </div>
                </li>
                <li className="earn-lp-total-staked-total-supply">
                    <div className="earn-lp-total-staked">
                        <div className="earn-lp-total-staked-title">Total Staked:</div>
                        <div className="earn-lp-total-staked-amount">0 $USDC</div>
                    </div>
                    <div className="earn-lp-total-supply">
                        <div className="earn-lp-total-supply-title">Total Supply:</div>
                        <div className="earn-lp-total-supply-amount">0 $RLP</div>
                    </div>
                </li>
                <li className="earn-lp-modal-buttons">
                    <BuyRLP/>
                    <ReedemRLP address={address}/>
                </li>
            </ul>
        </div>
    )
}

export default EarnLPTokenModal