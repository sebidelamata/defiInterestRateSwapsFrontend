import SelectedMarketModal from "./components/SelectedMarketModal"
import Graph from './components/Graph'
import PositionsMenu from "./components/PositionsMenu"

const Trade = () => {
    return(
        <>
            <SelectedMarketModal />
            <Graph />
            <PositionsMenu />
        </>
    )
}

export default Trade