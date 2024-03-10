import { useReadContract } from 'wagmi'
import {testnetREPOContractConfig, testnetUSDCContractConfig} from '../../abis'
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { ethers } from "ethers"
import { useProvider, useUSDC } from "../../EthersContextProvider"
import { useEffect, useState } from 'react'

const OverviewModal = () => {

    const { address, chainId, isConnected } = useWeb3ModalAccount()
    const { walletProvider } = useWeb3ModalProvider()

    const provider = useProvider()
    const USDC = useUSDC()

    // overview stat states
    const [usdcBalance, setUsdcBalance] = useState(null)

    const fethcUsdcBalance = async () => {
        console.log(USDC)
        const usdcBalance = await USDC.balanceOf(address)
        setUsdcBalance(usdcBalance)
        console.log(usdcBalance)
    }

    useEffect(() => {
        fethcUsdcBalance()
    }, [])

    // let { address, isConnecting, isDisconnected } = useAccount(config)

    // let userBalanceUSDCFetch = useReadContract({
    //     abi: testnetUSDCContractConfig.abi,
    //     address: testnetUSDCContractConfig.address,
    //     functionName: 'balanceOf',
    //     args: [address],
    //     watch: true,
    //     chainId:14997,
    //   })
    // // remove usdc decimals
    // userBalanceUSDCFetch = (parseInt(userBalanceUSDCFetch.data) * 10**-6).toFixed(2)

    // let poolBalanceUSDCFetch = useReadContract({
    //     abi: testnetREPOContractConfig.abi,
    //     address: testnetREPOContractConfig.address,
    //     functionName: 'balanceOf',
    //     args: [address],
    //     watch: true,
    //     chainId:14997,
    //   })
    // // remove usdc decimals
    // poolBalanceUSDCFetch = (parseInt(poolBalanceUSDCFetch.data) * 10**-6).toFixed(2)

    // let userBalanceRLPFetch = useReadContract({
    //     abi: testnetREPOContractConfig.abi,
    //     address: testnetREPOContractConfig.address,
    //     functionName: 'balanceOf',
    //     args: [address],
    //     watch: true,
    //     chainId:14997,
    //   })
    // // remove usdc decimals
    // //userBalanceRLPFetch = (parseInt(userBalanceRLPFetch.data) * 10**-6).toFixed(2)
    // let oracleFetch = useReadContract({
    //     abi: testnetREPOContractConfig.abi,
    //     address: testnetREPOContractConfig.address,
    //     functionName: "oracle",
    //     args: [],
    //     watch: true,
    //     chainId:14997,
    //   })

    return(
        <div className="overview-modal">
            <div className="overview-modal-title">Overview</div>
            <ul className="overview-stats">
                <li className="overview-stats-item">
                    <div className="overview-stats-item-title">$RLP Pool</div>
                    <div className="overview-stats-item-stat">
                    <div>{`poolBalanceUSDCFetch`}</div>
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