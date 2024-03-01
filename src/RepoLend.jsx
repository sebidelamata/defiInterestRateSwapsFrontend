import Navbar from "./components/Navbar"
import { testnetREPOContractConfig, testnetPTTokenContractConfig, testnetUSDCContractConfig } from "../abis"
import { useAccount, useReadContract } from "wagmi"
import {config} from './main'
import RepoLendAssetItem from "./components/RepoLendAssetItem"

const RepoLend = () => {

    let { address, isConnecting, isDisconnected } = useAccount(config)

    return(
        <div className="repo-lend-container">
            <Navbar/>
            <div className="repo-lend-body">
                <div className="repo-lend-title">
                    RepoLend
                </div>
                <div className="repo-lend-list-title">Post Collateral</div>
                <ul className="lend-list">
                    <li className="lend-container lend-pt-ausdc">
                        <RepoLendAssetItem address={address} config={testnetPTTokenContractConfig} assetString={'PT aUSDC'} type={'lend'}/>
                    </li>
                </ul>
                <div className="repo-borrow-list-title">Borrow Assets</div>
                <ul className="borrow-list">
                    <li className="borrow-container borrow-pt-steth">
                        <RepoLendAssetItem address={address} config={testnetUSDCContractConfig} assetString={'USDC'} type={'borrow'}/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RepoLend