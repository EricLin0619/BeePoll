import { getDefaultClient } from 'connectkit'
import { Chain, configureChains, createClient, sepolia } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { goerli, polygonMumbai } from 'wagmi/chains'

export const makeChain = (name: string, rpc: string, id: number) => {
  return {
    id: id,
    name: name,
    network: name,
    nativeCurrency: {
      decimals: 18,
      name: name,
      symbol: 'DOJ',
    },
    rpcUrls: {
      default: {
        http: [rpc],
      },
      public: {
        http: [rpc],
      }
    },
    testnet: true,
  }
}
const defaultChains: Chain[] = [
  goerli,
  polygonMumbai,
  sepolia,
  makeChain('dojima', 'https://api-test.d11k.dojima.network:8545/', 1001),
  // makeChain('Evmos Testnet', 'https://eth.bd.evmos.dev:8545', 9000),
];

const { chains, provider, webSocketProvider } = configureChains(
  // TODO: pull flag from .env and reconfigure this config object
  defaultChains,
  [
    publicProvider(),
  ],
)

export const client = createClient(
  getDefaultClient({
    autoConnect: true,
    appName: 'Horcross',
    provider,
    webSocketProvider,
    chains,
  })
)