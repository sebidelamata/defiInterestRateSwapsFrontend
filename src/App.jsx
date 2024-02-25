import './App.css'
import Navbar from './components/Navbar'
import OverviewModal from './components/OverviewModal'
import TotalStatsModal from './components/TotalStatsModal'
import Profile from './components/Profile'

function App() {

  return (
    <div className='homepage'>
      <Navbar className="nav-bar"/>
      <div className='stats-title'>Stats</div>
      <OverviewModal />
      <TotalStatsModal />
      <Profile />
    </div>
  )
}

export default App
