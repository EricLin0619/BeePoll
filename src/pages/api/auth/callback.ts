// api/auth/callback.ts
import { handleCallback } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";

const callbackHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await handleCallback(req, res);
    } catch (error: any) {
        res.status(error.status || 400).end(error.message);
    }
};

export default callbackHandler;