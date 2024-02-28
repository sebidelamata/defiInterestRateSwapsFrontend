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
                    <li className="yt-ausdc-market market-list-item">
                        <div className="market-title">YT aUSDC</div>
                        <ul className="market-stats">
                            <li className="market-reserve-size">
                                <div className="market-reserve-size-title market-stat-title">Market Reserve</div>
                                <div className="market-reserve-size-amount market-stat-amount">1M YT aUSDC</div>
                            </li>
                            <li className="market-available-liquidity">
                                <div className="market-available-liquidity-title market-stat-title">Available Liquidity</div>
                                <div className="market-stat-amount market-available-liquidity-amount">400k YT aUSDC</div>
                            </li>
                            <li className="market-ltv">
                                <div className="market-ltv-title market-stat-title">LTV</div>
                                <div className="market-ltv-amount market-stat-amount">10%</div>
                            </li>
                            <li className="market-oracle-price market-stat-title">
                                <div className="market-oracle-price market-stat-title">Oracle Price:</div>
                                <div className="market-stat-amount market-oracle-price-amount">1 USDC</div>
                            </li>
                        </ul>
                        <ul className="user-repo-lend-dashboard">
                            <li className="user-market-wallet-balance">
                                <div className="user-market-wallet-balance-title user-repo-lend-dashboard-item-title">Wallet</div>
                                <div className="user-market-wallet-balance-amount user-repo-lend-dashboard-item-amount">50 YT aUSDC</div>
                            </li>
                            <div className="market-supply-container">
                                <div className="market-supply-container user-repo-lend-dashboard-item-title">Available to Supply</div>
                                <div className="market-supply user-repo-lend-dashboard-item-amount">
                                    <div className="market-supply-amount">50</div>
                                    <div className="market-supply-unit">YT aUSDC</div>
                                </div>
                                <button className="supply-market-button">Supply</button>
                            </div>
                            <div className="market-borrow-container">
                                <div className="market-borrow-container">Available to Borrow</div>
                                <div className="market-borrow user-repo-lend-dashboard-item-amount">
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