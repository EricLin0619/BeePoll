import { create, get } from "@github/webauthn-json";
import { generateChallenge } from "./utils";
import { FormEvent } from "react";

export const onCreate = async (did: string) => {
    const credential = await create({
        publicKey: {
            challenge: generateChallenge(),
            rp: {
                name: "next-webauthn",
                // TODO: Change
                id: "bee-poll.vercel.app",//"bee-poll.vercel.app",//"ericlin0619.github.io",
            },
            user: {
                id: window.crypto.randomUUID(),
                name: did,
                displayName: did as string,
            },

            pubKeyCredParams: [{ alg: -7, type: "public-key" }],
            timeout: 60000,
            attestation: "direct",
            authenticatorSelection: {
                residentKey: "required",
                userVerification: "required",
            },
        },
    });
    console.log("create credential", JSON.stringify(credential, null, 2))
    return credential.id;
}

export const onGet = async () => {
    const credential = await get({
        publicKey: {
            challenge: generateChallenge(),//generateChallenge(),
            timeout: 60000,
            userVerification: "required",
            rpId: "bee-poll.vercel.app",//"bee-poll.vercel.app",//"ericlin0619.github.io",
        },
    });

    console.log("credential", JSON.stringify(credential, null, 2))
    return credential.id;
};

