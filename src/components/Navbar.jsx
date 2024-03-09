import { Link } from "react-router-dom"
import WalletConnectButton from './WalletConnectButton'
import { useState, useEffect } from "react"
import NavbarApproveEVC from "./NavbarApproveEVC"
import NavbarApproveRepOperator from "./NavbarApproveRepOperator"
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { BrowserProvider, Contract, formatUnits } from 'ethers'
import { useWeb3Modal } from '@web3modal/ethers/react'

const Navbar = () => {
    // const { open } = useWeb3Modal()
    // const { address, chainId, isConnected } = useWeb3ModalAccount()
    // const { walletProvider } = useWeb3ModalProvider()

    const [accountApproveState, setAccountApproveState] = useState(null)

    return(
        <div className="nav-bar">
            <div className="protocol-name-and-logo">
                <div className="protocol-logo">
                    <img className="shrimp-icon-navbar" src="./shrimp.svg" alt="Shrimp Icon"></img>
                </div>
                <div className="protocol-name">
                    REPO Interest Rate Swaps Protocol
                </div>
                <div className="protocol-tagline">
                    Protect Yourself From Interest Rate Volatility
                </div>
            </div>
            <div className="navbar-bottom-row">
                <ul className="nav-bar-link-list-center">
                    <li className="nav-bar-link">
                        <Link to={"/"}>Dashboard</Link>
                    </li>
                    <li className="nav-bar-link">
                        <Link to={"/earn"}>Earn</Link>
                    </li>
                    <li className="nav-bar-link">
                        <Link to={"/repolend"}>RepoLend</Link>
                    </li>
                    <li className="nav-bar-link">
                        <Link to={'/docs'}>Docs</Link>
                    </li>
                </ul>
                <ul className="nav-bar-link-list-right">
                    <li className="nav-bar-link">
                        <Link to={'/trade'}>Trade</Link>
                    </li>
                    {
                        accountApproveState === null && (
                            <li>
                                <NavbarApproveEVC setAccountApproveState={setAccountApproveState}/>
                            </li>
                        )
                    }
                    {
                        accountApproveState === 'approved' && (
                            <li>
                                <NavbarApproveRepOperator setAccountApproveState={setAccountApproveState}/>
                            </li>
                        )
                    }
                    <li className="nav-bar-link">
                        <WalletConnectButton className='button'/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar