import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        < >
            <div className="protocol-name-and-logo">
                <div className="protocol-logo">
                    🦐
                </div>
                <div className="protocol-name">
                    Protocol Name
                </div>
            </div>
            <ul className="nav-bar-link-list-center">
                <li className="nav-bar-link">
                    <Link to={"/"}>Dashboard</Link>
                </li>
                <li className="nav-bar-link">
                    <Link to={"/earn"}>Earn</Link>
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
                    Connect Wallet
                </li>
            </ul>
        </>
    )
}

export default Navbar