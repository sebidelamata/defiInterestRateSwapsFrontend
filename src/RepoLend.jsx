import Navbar from "./components/Navbar"

const RepoLend = () => {
    return(
        <div className="repo-lend-container">
            <Navbar/>
            <div className="repo-lend-body">
                <div className="repo-lend-title">
                    RepoLend
                </div>
                <ul className="markets-list">
                    <li className="yt-ausdc-market">
                        <div className="market-title">YT aUSDC</div>
                        <ul className="market-stats">
                            <li className="market-reserve-size">1M YT aUSDC</li>
                            <li className="market-available-liquidity">400k YT aUSDC</li>
                            <li className="market-ltv">10%</li>
                            <li className="market-oracle-price">1 USDC</li>
                        </ul>
                        <ul className="user-repo-lend-dashboard">
                            <li className="user-market-wallet-balance">
                                <div className="user-market-wallet-balance-title">Wallet Balance</div>
                                <div className="user-market-wallet-balance-amount">50 YT aUSDC</div>
                            </li>
                            <div className="market-supply-container">
                                <div className="market-supply-container">Available to Supply</div>
                                <div className="market-supply">
                                    <div className="market-supply-amount">50</div>
                                    <div className="market-supply-unit">YT aUSDC</div>
                                </div>
                                <button className="supply-market-button">Supply</button>
                            </div>
                            <div className="market-borrow-container">
                                <div className="market-borrow-container">Available to Borrow</div>
                                <div className="market-borrow">
                                    <div className="market-borrow-amount">50</div>
                                    <div className="market-borrow-unit">YT aUSDC</div>
                                </div>
                                <button className="borrow-market-button">Borrow</button>
                            </div>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RepoLend