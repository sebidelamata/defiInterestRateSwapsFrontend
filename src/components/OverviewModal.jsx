import { useReadContract } from 'wagmi'
import {testnetREPOContractConfig, testnetUSDCContractConfig} from '../../abis'
import { useAccount } from 'wagmi'
import { config } from '../main'

const OverviewModal = () => {

    let { address, isConnecting, isDisconnected } = useAccount(config)

    let userBalanceUSDCFetch = useReadContract({
        abi: testnetUSDCContractConfig.abi,
        address: testnetUSDCContractConfig.address,
        functionName: 'balanceOf',
        args: [address],
        watch: true,
        chainId:14997,
      })
    // remove usdc decimals
    userBalanceUSDCFetch = (parseInt(userBalanceUSDCFetch.data) * 10**-6).toFixed(2)

    let poolBalanceUSDCFetch = useReadContract({
        abi: testnetREPOContractConfig.abi,
        address: testnetREPOContractConfig.address,
        functionName: 'balanceOf',
        args: ['0x2e3aFd34fa0C2EefD22902603B58AdC43f08A68D'],
        watch: true,
        chainId:14997,
      })
    // remove usdc decimals
    poolBalanceUSDCFetch = (parseInt(poolBalanceUSDCFetch.data) * 10**-6).toFixed(2)

    let userBalanceRLPFetch = useReadContract({
        abi: testnetREPOContractConfig.abi,
        address: testnetREPOContractConfig.address,
        functionName: 'balanceOf',
        args: [address],
        watch: true,
        chainId:14997,
      })
    // remove usdc decimals
    //userBalanceRLPFetch = (parseInt(userBalanceRLPFetch.data) * 10**-6).toFixed(2)
    console.log(userBalanceRLPFetch)

    return(
        <div className="overview-modal">
            <div className="overview-modal-title">Overview</div>
            <ul className="overview-stats">
                <li className="overview-stats-item">
                    <div className="overview-stats-item-title">$RLP Pool</div>
                    <div className="overview-stats-item-stat">
                    <div>{`${poolBalanceUSDCFetch}`}</div>
                        <div className="total-stats-modal-item-stat-unit">USDC</div>
                    </div>
                </li>
                <li className="overview-stats-item">
                    <div className="overview-stats-item-title">24H Volume</div>
                    <div className="overview-stats-item-stat">
                        <div className="overview-stats-modal-item-stat-amount">0</div>
                        <div className="overview-stats-modal-item-stat-unit">USDC</div>
                    </div>
                </li>
                <li className="overview-stats-item">
                    <div className="overview-stats-item-title">Open Interest</div>
                    <div className="overview-stats-item-stat">
                        <div className="overview-stats-modal-item-stat-amount">0</div>
                        <div className="overview-stats-modal-item-stat-unit">USDC</div>
                    </div>
                </li>
                <li className="overview-stats-item">
                    <div className="overview-stats-item-title">Long Positions</div>
                    <div className="overview-stats-item-stat">
                        <div className="overview-stats-modal-item-stat-amount">0</div>
                        <div className="overview-stats-modal-item-stat-unit">USDC</div>
                    </div>
                </li>
                <li className="overview-stats-item">
                    <div className="overview-stats-item-title">Short Positions</div>
                    <div className="overview-stats-item-stat">
                        <div className="overview-stats-modal-item-stat-amount">0</div>
                        <div className="overview-stats-modal-item-stat-unit">USDC</div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default OverviewModal