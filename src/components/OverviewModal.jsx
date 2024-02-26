import { useReadContract } from 'wagmi'
import {testnetUSDCContractConfig} from '../../abis'

const OverviewModal = () => {

    let userBalanceUSDCFetch = useReadContract({
        abi: testnetUSDCContractConfig.abi,
        address: testnetUSDCContractConfig.address,
        functionName: 'balanceOf',
        args: ['0x900F4e8e26bBC37A0E8e069C5587946F7Bc91eEB'],
        watch: true,
        chainId:14997,
      })
    // remove usdc decimals
    userBalanceUSDCFetch = (parseInt(userBalanceUSDCFetch.data) * 10**-6).toFixed(2)

    return(
        <div className="overview-modal">
            <div className="overview-modal-title">Overview</div>
            <ul className="overview-stats">
                <li className="overview-stats-item">
                    <div className="overview-stats-item-title">$RLP Pool</div>
                    <div className="overview-stats-item-stat">
                    <div>{`${userBalanceUSDCFetch}`}</div>
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