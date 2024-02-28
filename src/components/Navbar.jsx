import { Link } from "react-router-dom"
import WalletConnectButton from './WalletConnectButton'


const Navbar = () => {
    return(
        <div className="nav-bar">
            <div className="protocol-name-and-logo">
                <div className="protocol-logo">
                    🦐
                </div>
                <div className="protocol-name">
                    REPO Interest Rate Swaps Protocol
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
                        <Link>Docs</Link>
                    </li>
                </ul>
                <ul className="nav-bar-link-list-right">
                    <li className="nav-bar-link">
                        <Link to={'/trade'}>Trade</Link>
                    </li>
                    <li className="nav-bar-link">
                        <WalletConnectButton className='button'/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar