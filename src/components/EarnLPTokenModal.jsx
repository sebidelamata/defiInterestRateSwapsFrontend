import BuyRLP from "./BuyRLP"
import ReedemRLP from "./ReedeemRLP"
import { testnetREPOContractConfig, testnetUSDCContractConfig } from "../../abis"
import { useWriteContract, useReadContract, useAccount } from "wagmi"
import { config } from "../main"

const EarnLPTokenModal = () => {

    let { address, isConnecting, isDisconnected } = useAccount(config)

    let { data: hash, error, isPending, writeContract } = useWriteContract() 
    //
    const numUserRLPShares = useReadContract({
        address: testnetREPOContractConfig.address,
        abi: testnetREPOContractConfig.abi,
        functionName: "balanceOf",
        args: [address],
        watch: true,
        chainId:14997,
      });
    
    const previewRedeem = useReadContract({
        address: testnetREPOContractConfig.address,
        abi: testnetREPOContractConfig.abi,
        functionName: "previewRedeem",
        args: [parseInt(numUserRLPShares.data) * 10**-6],
        watch: true,
        chainId:14997,
      });
      console.log(previewRedeem)
    
    return(
        <div className="earn-lp-token-modal">
            <ul className="earn-lp-token-modal-list">
                <li className="earn-lp-token-title">
                    $RLP
                </li>
                <li className="earn-lp-price-wallet-staked">
                    <div className="earn-lp-price">
                        <div className="earn-lp-price-title">Price:</div>
                        <div className="earn-lp-price-amount">{`${((parseInt(numUserRLPShares.data) * 10**-6) / parseInt(previewRedeem.data)) || '1.00'} $USDC`}</div>
                    </div>
                    <div className="earn-lp-wallet">
                        <div className="earn-lp-wallet-title">Wallet:</div>
                        <div className="earn-lp-wallet-amount">{`${parseInt(numUserRLPShares.data) * 10**-6} $RLP`}</div>
                    </div>
                    <div className="earn-lp-staked">
                        <div className="earn-lp-staked-title">Staked Value:</div>
                        <div className="earn-lp-staked-amount">{`${parseInt(previewRedeem.data)} $USDC`}</div>
                    </div>
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
                        <div className="earn-lp-total-supply-title">Title:</div>
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