import SelectedMarketModal from "./components/SelectedMarketModal"
import Graph from './components/Graph'
import PositionsMenu from "./components/PositionsMenu"
import TradeEntryModal from "./components/TradeEntryModal"

const Trade = () => {
    return(
        <>
            <SelectedMarketModal />
            <Graph />
            <PositionsMenu />
            <TradeEntryModal />
        </>
    )
}

export default Trade