import { Chain } from "viem"
import MasterBlockChainDetails from './src/masterBlockchainDetails'
 
export const testnet = {
  id: MasterBlockChainDetails.chainId,
  name: MasterBlockChainDetails.name,
  nativeCurrency: {
    decimals: MasterBlockChainDetails.decimals,
    name: MasterBlockChainDetails.name,
    symbol: MasterBlockChainDetails.name,
  },
  rpcUrls: {
    default: {
      http: [MasterBlockChainDetails.rpc],
    },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: MasterBlockChainDetails.explorerUrl },
  },
  testnet: true,
} as const satisfies Chain