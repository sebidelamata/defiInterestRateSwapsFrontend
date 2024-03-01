import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { WagmiProvider, http } from "wagmi";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'
import { testnet } from "../customChain";
// import { jsonRpcProvider } from "ethers";
import {createConfig} from 'wagmi'

const queryClient = new QueryClient()

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID


const repoTestnet = {
  chainId: 14997,
  name: 'Network name: BuildBear Persistent Siryn',
  currency: 'Token',
  explorerUrl: 'https://explorer.buildbear.io/persistent-siryn-0132e20a',
  rpcUrl: 'https://rpc.buildbear.io/persistent-siryn-0132e20a',
  rpcUrls: {
    default: {
      http: ['https://rpc.buildbear.io/persistent-siryn-0132e20a'],
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

export const config = createConfig({
  chains: [testnet],
  transports: {
    [testnet.id]: http(),
  }
})

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata, rpcUrl: "https://rpc.buildbear.io/persistent-siryn-0132e20a" }),
  wagmiConfig: config,
  chains: [repoTestnet],
  defaultChain: testnet,
  projectId: projectId,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
)
