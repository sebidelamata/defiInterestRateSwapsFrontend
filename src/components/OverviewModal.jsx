const OverviewModal = () => {
    return(
        <div className="overview-modal">
            <div className="overview-modal-title">Overview</div>
            <ul className="overview-stats">
                <li className="overview-stats-item">
                    <div className="overview-stats-item-title">USDC Pool</div>
                    <div className="overview-stats-item-stat">
                    <div>0</div>
                        <div className="total-stats-modal-item-stat-unit">USDC</div>
                    </div>
                </li>
                <li className="overview-stats-item">
                    <div className="overview-stats-item-title">24H Volume</div>
                    <div className="overview-stats-item-stat">
                        <div className="overview-stats-modal-item-stat-amount">0</div>
                        <div className="overview-stats-modal-item-stat-unit">USDC</div>
                    </div>
                </li>
                <li className="overview-stats-item">
                    <div className="overview-stats-item-title">Open Interest</div>
                    <div className="overview-stats-item-stat">
                        <div className="overview-stats-modal-item-stat-amount">0</div>
                        <div className="overview-stats-modal-item-stat-unit">USDC</div>
                    </div>
                </li>
                <li className="overview-stats-item">
                    <div className="overview-stats-item-title">Long Positions</div>
                    <div className="overview-stats-item-stat">
                        <div className="overview-stats-modal-item-stat-amount">0</div>
                        <div className="overview-stats-modal-item-stat-unit">USDC</div>
                    </div>
                </li>
                <li className="overview-stats-item">
                    <div className="overview-stats-item-title">Short Positions</div>
                    <div className="overview-stats-item-stat">
                        <div className="overview-stats-modal-item-stat-amount">0</div>
                        <div className="overview-stats-modal-item-stat-unit">USDC</div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default OverviewModal