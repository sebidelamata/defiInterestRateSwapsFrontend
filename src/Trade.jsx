import SelectedMarketModal from "./components/SelectedMarketModal"
import Graph from './components/Graph'
import PositionsMenu from "./components/PositionsMenu"
import TradeEntryModal from "./components/TradeEntryModal"
import Navbar from "./components/Navbar"

const Trade = () => {
    return(
        <>

            <div className="trade-title">Trade</div>
            <div className="trade-description">
                Stake $REPO and buy RLP to earn rewards.
            </div>
            <Navbar className="nav-bar"/>
            <SelectedMarketModal />
            <Graph />
            <PositionsMenu />
            <TradeEntryModal />
        </>
    )
}

export default Trade