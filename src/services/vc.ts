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
        schemaId: 'sch:hid:testnet:z4RzEpiYEiJArpJDo9ay74db8E3fQW2Ppau67b2v6JMX5:1.0',
        subjectDid: did,
        issuerDid: 'did:hid:testnet:z996acTcJsUzLZb2HwPnoX9YrDmj5u41vGpWYUkTSEZMg',
        expirationDate: '2027-12-10T18:30:00.000Z',
        fields: {
            name: user.name,
            nickname: user.nickname,
            picture: user.picture,
            sub: user.sub,
        },
        namespace: 'testnet',
        verificationMethodId: 'did:hid:testnet:z996acTcJsUzLZb2HwPnoX9YrDmj5u41vGpWYUkTSEZMg#key-1',
        persist: true,
    };
    try {
        const response = await axios.post(url, requestBody, { headers })
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
