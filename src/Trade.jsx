import SelectedMarketModal from "./components/SelectedMarketModal"
import PositionsMenu from "./components/PositionsMenu"
import TradeEntryModal from "./components/TradeEntryModal"
import Navbar from "./components/Navbar"
import TradingGraph from "./components/TradingGraph"
import { useState, useEffect } from "react"

const Trade = () => {

    const [priceData, setPriceData] = useState(null)
    const [priceDataLoading, setPriceDataLoading] = useState(true)
    const [priceDataError, setPriceDataError] = useState(null)

    async function fetchPriceData() {
        try {
          let today = new Date()
          let oneMonthAgo = today.setMonth(today.getMonth() - 1)
          oneMonthAgo = new Date(oneMonthAgo).toISOString().split('T')[0] + 'T00:00:00.000Z'
          today = new Date().toISOString().split('T')[0] + 'T00:00:00.000Z';
          const response = await fetch(`https://api-v2.pendle.finance/core/v3/42161/prices/0xb72b988caf33f3d8a6d816974fe8caa199e5e86c/ohlcv?time_frame=hour&timestamp_start=${oneMonthAgo}&timestamp_end=${today}`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          
          const data = await response.json();
          setPriceData(data.results)
          setPriceDataLoading(false)
          return;
        } catch (error) {
            setPriceDataError(error)
            setPriceDataLoading(false);
            return;
        }
      }

      useEffect(() => {
        fetchPriceData()
      }, []);


    return(
        <>

            <div className="trade-title">Trade</div>
            <div className="trade-description">
                Stake $REPO and buy RLP to earn rewards.
            </div>
            <Navbar className="nav-bar"/>
            <SelectedMarketModal priceData={priceData} priceDataLoading={priceDataLoading} priceDataError={priceDataError}/>
            <TradingGraph priceData={priceData} priceDataLoading={priceDataLoading} priceDataError={priceDataError}/>
            <PositionsMenu />
            <TradeEntryModal />
        </>
    )
}

export default Trade