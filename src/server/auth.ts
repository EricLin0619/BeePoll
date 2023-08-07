import { type Auth0Server, initAuth0 } from "@auth0/nextjs-auth0";
import { type IncomingMessage } from "http";

const instances = new Map<string, Auth0Server>();

export function getAuth0Urls(req: IncomingMessage) {
    const host = req.headers["host"];
    if (!host) throw new Error("Missing host in headers");

    const protocol = process.env.VERCEL_URL ? "https" : "http";
    const redirectUri = `${protocol}://${host}/api/auth/callback`;
    const returnTo = `${protocol}://${host}`;
    const baseURL = `${protocol}://${host}`;
    return {
        baseURL,
        redirectUri,
        returnTo,
    };
}

export function getAuth0Instance(req: IncomingMessage) {
    const { baseURL } = getAuth0Urls(req);

    let instance = instances.get(baseURL);

    if (!instance) {
        instance = initAuth0({ baseURL });
        instances.set(baseURL, instance);
    }

    return instance;
}