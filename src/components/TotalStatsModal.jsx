const TotalStatsModal = () => {
    return(
        <div className="total-stats-modal">
            <div className="total-stats-modal-title">
                Total Stats
            </div>
            <ul className="total-stats-modal-stats">
                <li className="total-stats-modal-stats-item">
                    <div className="total-stats-modal-item-title">Total Fees</div>
                    <div className="total-stats-modal-item-stat">
                        <div className="total-stats-modal-item-stat-amount">0</div>
                        <div className="total-stats-modal-item-stat-unit">USDC</div>
                    </div>
                </li>
                <li className="total-stats-modal-stats-item">
                    <div className="total-stats-modal-item-title">Total Volume</div>
                    <div className="total-stats-modal-item-stat">
                        <div className="total-stats-modal-item-stat-amount">0</div>
                        <div className="total-stats-modal-item-stat-unit">USDC</div>
                    </div>
                </li>
                <li className="total-stats-modal-stats-item">
                    <div className="total-stats-modal-item-title">Total Users</div>
                    <div className="total-stats-modal-item-stat">
                        <div className="total-stats-modal-item-stat-amount">0</div>
                    </div>
                </li>
                <li className="total-stats-modal-stats-item">
                    <div className="total-stats-modal-item-title">Treasury</div>
                    <div className="total-stats-modal-item-stat">
                        <div className="total-stats-modal-item-stat-amount">0</div>
                        <div className="total-stats-modal-item-stat-unit">USDC</div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default TotalStatsModal