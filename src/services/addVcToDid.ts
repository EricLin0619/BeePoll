import { signMessage } from "@wagmi/core";
import { getAccessToken, resolveDid, createDid, registerDid, updateDid } from "./did";
import { getDIDDocJSON } from "./utils";

export const addVcToDid = async (
    address: `0x${string}` | undefined,
    vcId: string,
    webAuthnId: string
) => {

    try {
        const token = await getAccessToken();
        const did = "did:hid:testnet:" + address;
        let didDocument = await resolveDid(did, token).then((res) => {
            return res.didDocument
        });

        if (didDocument.service.length == 0) {
            didDocument.service.push({
                id: "did:hid:testnet:z23dCariJNNpMNca86EtVZVvrLpn61isd86fWVyWa8Jkm#linked-domain",
                type: "LinkedDomains",
                serviceEndpoint: vcId + "#" + webAuthnId
            })
        } else {
            didDocument.keyAgreement = []
            didDocument.service = [{
                id: "did:hid:testnet:z23dCariJNNpMNca86EtVZVvrLpn61isd86fWVyWa8Jkm#linked-domain",
                type: "LinkedDomains",
                serviceEndpoint: vcId + "#" + webAuthnId
            }]
        }

        const message = getDIDDocJSON(didDocument);
        const signature = await signMessage({ message: JSON.stringify(message) });
        const updatedDid = await updateDid(message, signature, token);
        return updatedDid

    } catch (error) {
        console.error("Error occurred during DID binding:", error);
    }

};
