import { type NextApiHandler } from "next";
import { getAuth0Instance, getAuth0Urls } from "../../../server/auth";

const handler: NextApiHandler = (req, res) => {
    const instance = getAuth0Instance(req);

    const instanceHandler = instance.handleAuth({
        login: async (req: any, res: any) => {
            const { redirectUri, returnTo } = getAuth0Urls(req);

            await instance.handleLogin(req, res, {
                authorizationParams: {
                    redirect_uri: redirectUri,
                },
                returnTo: returnTo,
            });
        },
        callback: async (req: any, res: any) => {
            const { redirectUri, returnTo } = getAuth0Urls(req);

            await instance.handleCallback(req, res, {
                authorizationParams: {
                    redirect_uri: redirectUri,
                }
            });
        },
        logout: async (req: any, res: any) => {
            const { redirectUri, returnTo } = getAuth0Urls(req);

            await instance.handleLogout(req, res, {
                returnTo: returnTo,
            });
        },
    });

    instanceHandler(req, res);
};

export default handler;