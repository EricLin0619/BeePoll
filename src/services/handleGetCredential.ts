import { addVcToDid } from "./addVcToDid";
import { resolveDid, getAccessToken } from "./did";
import { issueVc } from "./vc";
import { onCreate } from "./webAuthnUtils";

export async function handleGetCredential(did: string, address: `0x${string}`, githubUser: any) {
    const didDocument = await resolveDid(did, await getAccessToken());
    if (didDocument?.didDocument?.service[0]?.serviceEndpoint === undefined) {
        console.log("create vc")
        const webAuthnId = await onCreate(did);
        console.log("webAuthnId", webAuthnId)
        const vcId = await issueVc(did, githubUser.user, webAuthnId);
        const userSub = githubUser.user?.sub as string;
        console.log("github user sub", userSub)
        const data = await addVcToDid(address, vcId, userSub)
        console.log(data)
    }
}