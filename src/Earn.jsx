import Navbar from "./components/Navbar"
import EarnGovTokenModal from "./components/EarnGovTokenModal"
import TotalRewards from "./components/TotalRewardsModal"
import EarnLPTokenModal from "./components/EarnLPTokenModal"

const Earn = () => {
    return(
        <div className="earn-page">
            <Navbar></Navbar>
            <EarnGovTokenModal/>
            <TotalRewards/>
            <EarnLPTokenModal/>
        </div>
    )
}

export default Earn