import SelectedMarketModal from "./components/SelectedMarketModal"
import PositionsMenu from "./components/PositionsMenu"
import TradeEntryModal from "./components/TradeEntryModal"
import Navbar from "./components/Navbar"
import TradingGraph from "./components/TradingGraph"
import { useState, useEffect } from "react"
import Papa from 'papaparse';

const Trade = () => {

    const [priceData, setPriceData] = useState(null)
    const [priceDataLoading, setPriceDataLoading] = useState(true)
    const [priceDataError, setPriceDataError] = useState(null)

    async function fetchPriceData() {
        try {
          const response = await fetch('https://api-v2.pendle.finance/core/v2/42161/markets/0x8621c587059357d6c669f72da3bfe1398fc0d0b5/apy-history?time_frame=hour&timestamp_start=2023-12-27T00:00:00.000Z&timestamp_end=2024-02-25T00:00:00.000Z');
          
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          
          const data = await response.json();
          const parsedData = Papa.parse(data.results, { header: true }).data;
          setPriceData(parsedData)
          setPriceDataLoading(false)
          console.log(data)
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