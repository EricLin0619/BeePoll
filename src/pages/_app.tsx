import { ConnectKitProvider } from "connectkit";
import Navbar from "../components/layout/navbar";
import { WagmiConfig } from "wagmi";
import Footer from "../components/layout/footer";
import "../styles/globals.css";
import { client } from "../wagmi";
import { AppProps } from "next/app";
import NextHead from "next/head";
import { GrazProvider, mainnetChains } from "graz";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps: session, ...pageProps }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <WagmiConfig client={client}>
          <ConnectKitProvider>
            <GrazProvider>
              <NextHead>
                <title>BeePoll</title>
                <link rel="icon" href="./bee.png" />
              </NextHead>
              <div className="min-h-screen flex flex-col dark:bg-slate-800">
                <Navbar />
                <Component {...pageProps}></Component>
                <Footer />
              </div>
            </GrazProvider>
          </ConnectKitProvider>
        </WagmiConfig>
      </ThemeProvider>
    </SessionProvider>
  );
}
export default App;
