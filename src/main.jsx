import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { useWeb3Modal } from "@web3modal/ethers/react";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react"
import { testnet } from "../customChain";

// testnet details
import MasterBlockChainDetails from './masterBlockchainDetails'

// // 1. Get projectId at https://cloud.walletconnect.com
const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID


const repoTestnet = {
  chainId: MasterBlockChainDetails.chainId,
  name: MasterBlockChainDetails.name,
  currency: MasterBlockChainDetails.tokenName,
  explorerUrl: MasterBlockChainDetails.explorerUrl,
  rpcUrl: MasterBlockChainDetails.rpc,
  rpcUrls: {
    default: {
      http: [MasterBlockChainDetails.rpc],
    },
  },
}

// 3. Create modal
const metadata = {
  name: 'REPO',
  description: 'A Interest Rates Swaps Protocol',
  url: 'https://mywebsite.com',
  icons: ['https://avatars.mywebsite.com/']
}


createWeb3Modal({
  ethersConfig: defaultConfig({ metadata, rpcUrl: MasterBlockChainDetails.rpc }),
  chains: [repoTestnet],
  defaultChain: testnet,
  projectId: projectId,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router />
  </React.StrictMode>,
)
