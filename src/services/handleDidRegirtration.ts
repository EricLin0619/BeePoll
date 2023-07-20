import { signMessage } from "@wagmi/core";
import { getAccessToken, resolveDid, createDid, registerDid } from "./did";

export const handleDidRegistration = async (
    isConnected: boolean,
    isRegistered: boolean,
    address: `0x${string}` | undefined,
    setIsRegistered: (arg0: boolean) => void) => {
    if (isConnected && !isRegistered) {
        try {
            const token = await getAccessToken();
            const did = "did:hid:testnet:" + address;
            const res = await resolveDid(did, token);

            if (res.didDocument.id !== undefined) {
                setIsRegistered(true);
            } else {
                const didDocument = await createDid(address, token);
                const message = JSON.stringify(didDocument);
                const signature = await signMessage({ message });
                const registrationRes = await registerDid(didDocument, signature, token);
                console.log(registrationRes);
            }
        } catch (error) {
            console.error("Error occurred during DID registration:", error);
        }
    }
};
