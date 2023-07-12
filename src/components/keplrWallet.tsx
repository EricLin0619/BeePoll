import { useAccount, useConnect, useDisconnect } from "graz";

const KeplrWallet = () => {
    const { connect, status } = useConnect();
    const { data: account, isConnected } = useAccount();
    const { disconnect } = useDisconnect();

    const handleConnect = () => {
        return isConnected ? disconnect() : connect({
            chain: {
                chainId: "jagrat",
                currencies: [],
                rest: "https://api.jagrat.hypersign.id",
                rpc: "https://rpc.jagrat.hypersign.id",
            }
        });
    }

    return (
        <button className="btn btn-outline-secondary" onClick={handleConnect}>{isConnected ? "Disconnect Keplr" : "Connect Keplr"}</button>
    );
}

export default KeplrWallet;