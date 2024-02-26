import './App.css'
import Navbar from './components/Navbar'
import OverviewModal from './components/OverviewModal'
import TotalStatsModal from './components/TotalStatsModal'
import { useReadContract } from 'wagmi'
import {testnetUSDCContractConfig} from '../abis'

function App() {
  console.log(testnetUSDCContractConfig.abi)
  const result = useReadContract({
    abi: testnetUSDCContractConfig.abi,
    address: testnetUSDCContractConfig.address,
    functionName: 'balanceOf',
    args: ['0x8E11D12876633885629ffA329Eb7bdAb4AD0Cd3B'],
    // watch: true,
    chainId:14997,
    onSuccess(data) {
      console.log("Data 2", data)
    }
  })
  console.log("Data 1", result)

  
  return (
    <div className='homepage'>
      <Navbar className="nav-bar"/>
      <div className='stats-title'>Stats</div>
      <OverviewModal />
      <TotalStatsModal />
    </div>
  )
}

export default App
