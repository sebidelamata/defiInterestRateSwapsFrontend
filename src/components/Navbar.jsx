import { Link } from "react-router-dom"
import WalletConnectButton from './WalletConnectButton'
import { useState, useEffect } from "react"
import NavbarApproveEVC from "./NavbarApproveEVC"
import NavbarApproveRepOperator from "./NavbarApproveRepOperator"
import { useAccount } from "wagmi"
import {config} from '../main'

const Navbar = () => {

    const [accountApproveState, setAccountApproveState] = useState(null)
    let { address, isConnecting, isDisconnected } = useAccount(config)
    console.log(accountApproveState)
    return(
        <div className="nav-bar">
            <div className="protocol-name-and-logo">
                <div className="protocol-logo">
                    🦐
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
                                <NavbarApproveEVC address={address} setAccountApproveState={setAccountApproveState}/>
                            </li>
                        )
                    }
                    {
                        accountApproveState === 'approved' && (
                            <li>
                                <NavbarApproveRepOperator address={address} setAccountApproveState={setAccountApproveState}/>
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