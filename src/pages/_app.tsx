import { ConnectKitProvider } from "connectkit";
import Navbar from "../components/layout/navbar";
import { WagmiConfig } from "wagmi";
import Footer from "../components/layout/footer";
import "../styles/globals.css";
import { client } from "../wagmi";
import { AppProps } from "next/app";
import NextHead from "next/head";
import { GrazProvider } from "graz";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ThemeProvider } from "next-themes";
import React from "react";

function App({ Component, pageProps: session, ...pageProps }: AppProps) {
  return (
    <UserProvider>
      <ThemeProvider attribute="class">
        <WagmiConfig client={client}>
          <ConnectKitProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs as any} >
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
            </LocalizationProvider>
          </ConnectKitProvider>
        </WagmiConfig>
      </ThemeProvider>
    </UserProvider>
    
  );
}
export default App;
