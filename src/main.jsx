import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID

// 2. Set chains
const repoTestnet = {
  chainId: 14997,
  name: 'BuildBear Persistent Siryn',
  currency: 'TOKEN',
  explorerUrl: 'https://explorer.buildbear.io/persistent-siryn-0132e20a',
  rpcUrl: 'https://rpc.buildbear.io/persistent-siryn-0132e20a'
}

// 3. Create modal
const metadata = {
  name: 'REPO',
  description: 'A Interest Rates Swaps Protocol',
  url: 'https://mywebsite.com',
  icons: ['https://avatars.mywebsite.com/']
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [repoTestnet],
  defaultChain: repoTestnet,
  projectId,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Router />
  </React.StrictMode>,
)
