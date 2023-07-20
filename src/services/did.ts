import axios from 'axios';
const { HypersignDID } = require("hs-ssi-sdk");

export const createDid = async (address: `0x${string}` | undefined) => {
    const url = 'https://api.entity.hypersign.id/api/v1/did/create';

    const token = process.env.NEXT_PUBLIC_SSI_ACCESS_TOKEN;
    console.log("token", token)
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
                "keyAgreement",
                "capabilityInvocation",
                "capabilityDelegation"
            ]
        }
    };

    try {
        const response = await axios.post(url, data, { headers });
        console.log('API response:', JSON.stringify(response.data, null, 2));


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


export const registerDID = async (didDocument: any, signature: any) => {
    const url = 'https://api.entity.hypersign.id/api/v1/did/register';

    const headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SSI_ACCESS_TOKEN}`,
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

    console.log("registerDID REQUEST", JSON.stringify(requestBody, null, 2))


    axios.post(url, requestBody, { headers })
        .then(response => {
            console.log(response.data);
            return response;
        })
        .catch(error => {
            console.error("did register error：", error);
            return error;
        });
};

