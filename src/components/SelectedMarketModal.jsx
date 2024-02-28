const SelectedMarketModal = ({priceData, priceDataLoading, priceDataError}) => {
    
    if(priceDataLoading){
        return <div className='loading'>Loading...</div>
    }

    if(priceDataError !== null){
        return <div className='loading'>There was a network error</div>
    }

    const time = priceData.map(entry => new Date(entry.time));
    const close = priceData.map(entry => entry.close);
    
    const parsedData = {
        time,
        close,
    }
    const twentyFourHrData = {
        timestamps: time.slice(time.length - 25, time.length),
        close: close.slice(close.length - 25, close.length)
    }

    const twentyFourHrPctChange = Math.round(((twentyFourHrData.close[0] - twentyFourHrData.close[twentyFourHrData.close.length - 1]) / twentyFourHrData.close[0]) * 1000000) / 10000

    const twentyFourHrMin = Math.min(...twentyFourHrData.close).toFixed(4)
    const twentyFourHrMax = Math.max(...twentyFourHrData.close).toFixed(4)

    return(
        
        <div className="selected-market-modal">
            <select name="select-market-selector" id="selectMarket" defaultValue={'aUSDC'}>
                <option value="YT aUSDC">YT aUSDC</option>
            </select>
            <div  className="selected-market-price">{`Last Price: ${parsedData.close[parsedData.close.length - 1].toFixed(4)} USDC`}</div>
            <div className="twenty-four-hr-change">
                <div className="twenty-four-hr-change-title">24hr % Change:</div>
                <div className="twenty-four-hr-change-amount">{`${twentyFourHrPctChange}%`}</div>
            </div>
            <div className="twenty-four-hr-high-price">
                <div className="twenty-four-hr-high-price-title">24hr High Price</div>
                <div className="twenty-four-hr-high-price-amount">{`${twentyFourHrMax} USDC`}</div>
            </div>
            <div className="twenty-four-hr-low-price">
                <div className="twenty-four-hr-low-price-title">24hr Low Price</div>
                <div className="twenty-four-hr-low-price-amount">{`${twentyFourHrMin} USDC`}</div>
            </div>
        </div>
    )
}

export default SelectedMarketModal