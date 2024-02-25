const SelectedMarketModal = ({priceData, priceDataLoading, priceDataError}) => {
    
    if(priceDataLoading){
        return <div className='loading'>Loading...</div>
    }

    if(priceDataError !== null){
        return <div className='loading'>There was a network error</div>
    }

    const timestamps = priceData.map(entry => new Date(entry.timestamp * 1000));
    const underlyingApy = priceData.map(entry => 1 - entry.underlyingApy);
    const impliedApy = priceData.map(entry => 1 - entry.impliedApy);
    
    const parsedData = {
        timestamps,
        underlyingApy,
        impliedApy
    }
    const twentyFourHrData = {
        timestamps: timestamps.slice(timestamps.length - 25, timestamps.length),
        underlyingApy: underlyingApy.slice(underlyingApy.length - 25, underlyingApy.length),
        impliedApy: impliedApy.slice(impliedApy.length - 25, impliedApy.length)
    }

    const twentyFourHrPctChange = Math.round(((twentyFourHrData.impliedApy[0] - twentyFourHrData.impliedApy[twentyFourHrData.impliedApy.length - 1]) / twentyFourHrData.impliedApy[0]) * 1000000) / 10000

    const twentyFourHrMin = Math.min(...twentyFourHrData.impliedApy)
    const twentyFourHrMax = Math.max(...twentyFourHrData.impliedApy)
    console.log(twentyFourHrMin)

    console.log(twentyFourHrData)

    return(
        
        <div className="selected-market-modal">
            <select name="select-market-selector" id="selectMarket" defaultValue={'aUSDC'}>
                <option value="YT aUSDC">YT aUSDC</option>
            </select>
            <div  className="selected-market-price">{`Last Price: ${parsedData.impliedApy[parsedData.impliedApy.length - 1]} USDC`}</div>
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