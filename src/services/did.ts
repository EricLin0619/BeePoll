import axios, { AxiosResponse } from 'axios';

export const getAccessToken = async () => {
    const url = 'https://api.entity.hypersign.id/api/v1/app/oauth';
    const headers = {
        'accept': 'application/json',
        'X-Api-Secret-Key': '1fae14d6e06b702c5b825e469fc2b.7e218298064c0cc5c00aedcfe73cb2c501b60cea1209245a471e4c53334c6dca457635a7884658350fe602aa21de03fbb'
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
        delete originDidDocument['keyAgreement']
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
        console.log("registerDid response:", response.data)
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

