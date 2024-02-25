import SelectedMarketModal from "./components/SelectedMarketModal"
import PositionsMenu from "./components/PositionsMenu"
import TradeEntryModal from "./components/TradeEntryModal"
import Navbar from "./components/Navbar"
import TradingGraph from "./components/TradingGraph"
import { useState, useEffect } from "react"

const Trade = () => {

    return(
        <>

            <div className="trade-title">Trade</div>
            <div className="trade-description">
                Stake $REPO and buy RLP to earn rewards.
            </div>
            <Navbar className="nav-bar"/>
            <SelectedMarketModal />
            <TradingGraph/>
            <PositionsMenu />
            <TradeEntryModal />
        </>
    )
}

export default Trade