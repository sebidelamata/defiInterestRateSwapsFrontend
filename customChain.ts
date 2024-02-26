import { Chain } from "viem"
 
export const testnet = {
  id: 14997,
  name: 'BuildBear Persistent Siryn',
  nativeCurrency: {
    decimals: 18,
    name: 'TOKEN',
    symbol: 'TOKEN',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.buildbear.io/persistent-siryn-0132e20a'],
    },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://explorer.buildbear.io/persistent-siryn-0132e20a' },
  },
  testnet: true,
} as const satisfies Chain