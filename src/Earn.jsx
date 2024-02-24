import Navbar from "./components/Navbar"
import EarnGovTokenModal from "./components/EarnGovTokenModal"
import TotalRewards from "./components/TotalRewardsModal"
import EarnLPTokenModal from "./components/EarnLPTokenModal"

const Earn = () => {
    return(
        <>
            <Navbar></Navbar>
            <EarnGovTokenModal/>
            <TotalRewards/>
            <EarnLPTokenModal/>
        </>
    )
}

export default Earn