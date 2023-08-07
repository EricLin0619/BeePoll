import { AppRouteHandlerFnContext, handleAuth, handleLogin } from "@auth0/nextjs-auth0";
import { NextRequest } from "next/server";

export default handleAuth({
    async login(req: any, res: any): Promise<any> {
        await handleLogin(req, res, {
            authorizationParams: {
                prompt: "login",
            },
            returnTo: "/"
        });
    },
});
