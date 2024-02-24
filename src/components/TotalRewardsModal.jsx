const TotalRewards = () => {
    return(
        <div className="total-rewards-modal">
            <ul className="total-rewards-modal-list">
                <li className="total-rewards-modal-title">
                    Total Rewards
                </li>
                <li className="total-rewards-modal-stats">
                    <div className="total-rewards-modal-stats-amount">0</div>
                    <div className="total-rewards-modal-unit">USDC</div>
                </li>
                <li className="total-rewards-modal-buttons">
                    <button className="total-rewards-modal-buttons-compound">Compound</button>
                    <button className="total-rewards-modal-claim">Claim</button>
                </li>
            </ul>
        </div>
    )
}

export default TotalRewards