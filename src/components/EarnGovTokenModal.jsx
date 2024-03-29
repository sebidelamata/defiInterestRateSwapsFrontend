import { Link } from "react-router-dom"

const EarnGovTokenModal = () => {
    return(
        <div className="earn-gov-token-modal">
            <ul className="earn-gov-token-modal-subsection-list">
                <li className="earn-gov-token-modal-subsection-list-item">
                    <div className="earn-gov-token-modal-title">
                        $REPO
                    </div>
                </li>
                <li className="earn-gov-token-modal-subsection-list-item">
                    <ul className="price-wallet-staked-list">
                        <li className="price-wallet-staked-list-item">
                            <div className="price-wallet-staked-list-item-title">
                                Price:
                            </div>
                            <div className="price-wallet-staked-list-item-stat">
                                <div className="price-wallet-staked-amount">0</div>
                                <div className="price-wallet-staked-unit">USDC</div>
                            </div>
                        </li>
                        <li className="price-wallet-staked-list-item">
                            <div className="price-wallet-staked-list-item-title">
                                Wallet:
                            </div>
                            <div className="price-wallet-staked-list-item-stat">
                                <div className="price-wallet-staked-amount">0</div>
                                <div className="price-wallet-staked-unit">$REPO</div>
                            </div>
                        </li>
                        <li className="price-wallet-staked-list-item">
                            <div className="price-wallet-staked-list-item-title">
                                Staked:
                            </div>
                            <div className="price-wallet-staked-list-item-stat">
                                <div className="price-wallet-staked-amount">0</div>
                                <div className="price-wallet-staked-unit">$REPO</div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="earn-gov-token-modal-subsection-list-item">
                    <ul className="apr-rewards-list">
                        <li className="apr-rewards-list-item">
                            <div className="apr-rewards-list-item-title">
                                APR
                            </div>
                            <div className="apr-rewards-list-item-amount">
                                0%
                            </div>
                        </li>
                        <li className="apr-rewards-list-item">
                            <div className="apr-rewards-list-item-title">
                                Rewards
                            </div>
                            <div className="apr-rewards-list-item-amount">
                                <div className="apr-rewards-list-item-amount-amount">0</div>
                                <div className="apr-rewards-list-item-amount-unit">USDC</div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="earn-gov-token-modal-subsection-list-item">
                    <ul className="total-staked-supply-list">
                        <li className="total-staked-supply-list-item">
                            <div className="total-staked-title">Total Staked:</div>
                            <div className="total-staked-amount">
                                <div className="total-staked-amount-amount">0</div>
                                <div className="total-staked-amount-unit">$REPO</div>
                            </div>
                        </li>
                        <li className="total-staked-supply-list-item">
                            <div className="total-supply-title">Total Supply:</div>
                            <div className="total-supply-amount">
                                <div className="total-supply-amount-amount">0</div>
                                <div className="total-supply-amount-unit">$REPO</div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="earn-gov-token-modal-subsection-list-item earn-gov-modal-bottom">
                    <Link to={'https://app.uniswap.org/swap'} target="_blank" noreferrer="true" className="buy-repo">Buy $REPO</Link>
                    <button className="earn-gov-token-modal-stake-button stake-repo" >Stake</button>
                    <button className="earn-gov-token-modal-unstake-button unstake-repo">Unstake</button>
                </li>
            </ul>
        </div>
    )
}

export default EarnGovTokenModal