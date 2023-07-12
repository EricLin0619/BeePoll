import { ConnectKitProvider } from 'connectkit'
import Navbar from '../components/navbar'
import { WagmiConfig, useAccount } from 'wagmi'
import Footer from '../components/footer'
import '../styles/globals.css'
import { client } from '../wagmi'
import { AppProps } from 'next/app'
import NextHead from 'next/head'
import { GrazProvider, mainnetChains } from "graz";


function App({Component, pageProps}: AppProps) {

  return (
      <WagmiConfig client={client}>
        <ConnectKitProvider>
        <GrazProvider>
          <NextHead>
            <title>Horcross</title>
            <link rel="icon" href="./favicon.ico" />
          </NextHead>
          <div className='min-h-screen flex flex-col'>
            <Navbar />
              <Component { ...pageProps}></Component>
            <Footer/>
          </div>
          </GrazProvider>
        </ConnectKitProvider>
      </WagmiConfig>
    )
}
export default App
