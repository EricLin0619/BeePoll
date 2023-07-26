import { signMessage } from "@wagmi/core";
import { getAccessToken, resolveDid, createDid, registerDid } from "./did";

export const handleDidRegistration = async (
    address: `0x${string}` | undefined )=> {
    
        try {
            const token = await getAccessToken();
            const did = "did:hid:testnet:" + address;
            const res = await resolveDid(did, token);

            if (res?.didDocument?.id !== undefined) {
                console.log("DID already registered", res?.didDocument?.id)
                return res?.didDocument?.id;
            } else {
                const didDocument = await createDid(address, token);
                const message = JSON.stringify(didDocument);
                const signature = await signMessage({ message });
                const registedDID = await registerDid(didDocument, signature, token) as any;
                //console.log(registrationRes.metaData.didDocument.id);
                return registedDID
            }
        } catch (error) {
            console.error("Error occurred during DID registration:", error);
        }
    
};
