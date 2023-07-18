import { ConnectKitProvider } from 'connectkit'
import Navbar from '../components/navbar'
import { WagmiConfig, useAccount } from 'wagmi'
import Footer from '../components/footer'
import '../styles/globals.css'
import { client } from '../wagmi'
import { AppProps } from 'next/app'
import NextHead from 'next/head'
import { GrazProvider, mainnetChains } from "graz";
import { SessionProvider } from 'next-auth/react'


function App({Component, pageProps}: AppProps) {

  return (
    <SessionProvider session={pageProps.session}>
      <WagmiConfig client={client}>
        <ConnectKitProvider>
        <GrazProvider>
          <NextHead>
            <title>BeePoll</title>
            <link rel="icon" href="./bee.png"/>
          </NextHead>
          <div className='min-h-screen flex flex-col'>
            <Navbar />
              <Component { ...pageProps}></Component>
            <Footer/>
          </div>
          </GrazProvider>
        </ConnectKitProvider>
      </WagmiConfig>
    </SessionProvider>
    )
}
export default App
