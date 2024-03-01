import { Chain } from "viem"
 
export const testnet = {
  id: 42161,
  name: 'Tenderly Arbitrum Fork',
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.vnet.tenderly.co/devnet/arbdevnet/74678d0f-a389-4508-b53b-a607b8f960b0'],
    },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://explorer.buildbear.io/persistent-siryn-0132e20a' },
  },
  testnet: true,
} as const satisfies Chain