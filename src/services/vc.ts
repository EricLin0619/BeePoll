import axios from "axios";
import { getAccessToken } from "./did";

export const issueVc = async (did: any, user: any, webAuthnId: any) => {
    const url = 'https://api.entity.hypersign.id/api/v1/credential/issue';
    const token = await getAccessToken();
    const headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };


    const requestBody = {
        schemaId: 'sch:hid:testnet:z2dNytfsbHiAnnx6JmC6V1T5y1sF2XXkpKAaHjAao587N:1.0',
        subjectDid: did,
        issuerDid: 'did:hid:testnet:z996acTcJsUzLZb2HwPnoX9YrDmj5u41vGpWYUkTSEZMg',
        expirationDate: '2027-12-10T18:30:00.000Z',
        fields: {
            githubName: user.name,
            githubNickname: user.nickname,
            githubSub: user.sub,
            webAuthnId: webAuthnId,
        },
        namespace: 'testnet',
        verificationMethodId: 'did:hid:testnet:z996acTcJsUzLZb2HwPnoX9YrDmj5u41vGpWYUkTSEZMg#key-1',
        persist: true,
    };
    try {
        const response = await axios.post(url, requestBody, { headers })
        console.log("VC is here", response.data)
        return response.data.credentialStatus.claim.id
    }
    catch (error) {
        console.error('issue Vc error:', error);
        throw error;
    }
};

export const getVc = async (vcId: any) => {
    const url = `https://api.entity.hypersign.id/api/v1/credential/${vcId}`;
    const token = await getAccessToken();

    const headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    try {
        const response = await axios.get(url, { headers });
        return response.data.credentialStatus;
    } catch (error) {
        console.error('get Vc error:', error);
        throw error;
    }
}
