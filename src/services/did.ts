import axios, { AxiosResponse } from 'axios';

export const getAccessToken = async () => {
    const url = 'https://api.entity.hypersign.id/api/v1/app/oauth';
    const headers = {
        'accept': 'application/json',
        'X-Api-Secret-Key': "23e6b757a9723e0ba0bd89c67edd9.f972553d5d7df2ebfe40142e4e6ea034107b628209b6935262a22a39b21152926405f8a3f03e32d79ebf75afb47d89cf3"
    };

    try {
        const response = await axios.post(url, {}, { headers });
        return response.data.access_token as string;
    } catch (error: any) {
        console.error('Error occurred:', error.message);
    }
}

export const createDid = async (address: `0x${string}` | undefined, token: string | undefined) => {
    const url = 'https://api.entity.hypersign.id/api/v1/did/create';

    const headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const data = {
        namespace: "testnet",
        options: {
            keyType: "EcdsaSecp256k1RecoveryMethod2020",
            walletAddress: address,
            chainId: "0x1",
            verificationRelationships: [
                "assertionMethod",
                "authentication",
                // "keyAgreement",
                "capabilityInvocation",
                "capabilityDelegation"
            ]
        }
    };

    try {
        const response = await axios.post(url, data, { headers });
        console.log('createDid response:', JSON.stringify(response.data, null, 2));


        // Rename @context to context
        let originDidDocument = response.data.metaData.didDocument;
        const context = originDidDocument['@context'];
        delete originDidDocument['@context'];
        const didDocument = { context, ...originDidDocument };

        return didDocument;
    } catch (error) {
        console.error('API error:', error);
        throw error;
    }

};


export const registerDid = async (didDocument: any, signature: any, token: string | undefined) => {
    const url = 'https://api.entity.hypersign.id/api/v1/did/register';

    const headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
    const requestBody = {
        didDocument,
        signInfos: [
            {
                verification_method_id: didDocument.verificationMethod[0].id,
                clientSpec: {
                    type: 'eth-personalSign',
                },
                signature: signature,
            },
        ],
    };
    try {
        const response = await axios.post(url, requestBody, { headers })
        return response.data.did
    }
    catch (error) {
        console.error('registerDID error:', error);
        throw error;
    }
};



export const updateDid = async (didDocument: any, signature: any, token: string | undefined) => {
    const url = 'https://api.entity.hypersign.id/api/v1/did';

    const headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
    const requestBody = {
        didDocument,
        signInfos: [
            {
                verification_method_id: didDocument.verificationMethod[0].id,
                clientSpec: {
                    type: 'eth-personalSign',
                },
                signature: signature,
            },
        ],
        deactivate: false
    };

    try {
        const response = await axios.patch(url, requestBody, { headers })
        console.log("updateDid response:", response.data)
        return response.data
    }
    catch (error) {
        console.error('updateDid error:', error);
        throw error;
    }
};

export const resolveDid = async (did: string, token: string | undefined) => {
    const url = `https://api.entity.hypersign.id/api/v1/did/resolve/${did}`;
    const headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`,
    };

    try {
        const response: AxiosResponse = await axios.get(url, { headers });
        return response.data;
    } catch (error: any) {
        console.error('Error occurred:', error.message);
    }
}

