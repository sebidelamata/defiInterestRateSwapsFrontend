import './App.css'
import Navbar from './components/Navbar'
import OverviewModal from './components/OverviewModal'
import TotalStatsModal from './components/TotalStatsModal'

function App() {

  return (
    <>
      <Navbar className="nav-bar"/>
      <div className='stats-title'>Stats</div>
      <OverviewModal />
      <TotalStatsModal />
    </>
  )
}

export default App
