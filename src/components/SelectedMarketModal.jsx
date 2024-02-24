const SelectedMarketModal = () => {
    return(
        <div className="selected-market-modal">
            <select name="select-market-selector" id="selectMarket" defaultValue={'aUSDC'}>
                <option value="aUSDC">aUSDC</option>
            </select>
            <div  className="selected-market-price">1 USDC</div>
            <div className="twenty-four-hr-change">
                <div className="twenty-four-hr-change-title">24hr % Change:</div>
                <div className="twenty-four-hr-change-amount">0%</div>
            </div>
            <div className="twenty-four-hr-high-price">
                <div className="twenty-four-hr-high-price-title">24hr High Price</div>
                <div className="twenty-four-hr-high-price-amount">1 USDC</div>
            </div>
            <div className="twenty-four-hr-low-price">
                <div className="twenty-four-hr-low-price-title">24hr Low Price</div>
                <div className="twenty-four-hr-low-price-amount">1 USDC</div>
            </div>
        </div>
    )
}

export default SelectedMarketModal