import BuyRLP from "./BuyRLP"

const EarnLPTokenModal = () => {

    
    return(
        <div className="earn-lp-token-modal">
            <ul className="earn-lp-token-modal-list">
                <li className="earn-lp-token-title">
                    $RLP
                </li>
                <li className="earn-lp-price-wallet-staked">
                    <div className="earn-lp-price">
                        <div className="earn-lp-price-title">Price:</div>
                        <div className="earn-lp-price-amount">1.00 USDC</div>
                    </div>
                    <div className="earn-lp-wallet">
                        <div className="earn-lp-wallet-title">Wallet:</div>
                        <div className="earn-lp-wallet-amount">0 $RLP</div>
                    </div>
                    <div className="earn-lp-staked">
                        <div className="earn-lp-staked-title">Staked:</div>
                        <div className="earn-lp-staked-amount">0 $RLP</div>
                    </div>
                </li>
                <li className="earn-lp-apr-rewards">
                    <div className="earn-lp-apr">
                        <div className="earn-lp-apr-title">APR:</div>
                        <div className="earn-lp-apr-amount">0%</div>
                    </div>
                    <div className="earn-lp-rewards">
                        <div className="earn-lp-rewards-title">Rewards:</div>
                        <div className="earn-lp-rewards-amount">0 USDC</div>
                    </div>
                </li>
                <li className="earn-lp-total-staked-total-supply">
                    <div className="earn-lp-total-staked">
                        <div className="earn-lp-total-staked-title">Total Staked:</div>
                        <div className="earn-lp-total-staked-amount">0 $RLP</div>
                    </div>
                    <div className="earn-lp-total-supply">
                        <div className="earn-lp-total-supply-title">Title:</div>
                        <div className="earn-lp-total-supply-amount">0 $RLP</div>
                    </div>
                </li>
                <li className="earn-lp-modal-buttons">
                    <BuyRLP/>
                    <button className="earn-lp-modal-buttons-sell-lp">Sell $RLP</button>
                </li>
            </ul>
        </div>
    )
}

export default EarnLPTokenModal