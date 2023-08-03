// api/auth/login.ts
import { handleLogin } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";

const loginHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        console.log("loginHandler")
        console.log("req", req.body)
        console.log("res", res)
        await handleLogin(req, res, {
            authorizationParams: {
                screen_hint: "login",
            },
            returnTo: '/BeePoll'
        });
    } catch (error: any) {
        res.status(error.status || 400).end(error.message);
    }
};

export default loginHandler;