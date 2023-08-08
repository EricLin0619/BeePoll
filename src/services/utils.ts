import crypto from "crypto";

export function formatAddress(address: string) {
  if (!address) {
    return ""; // If the address is undefined, return an empty string
  }
  if (address.length <= 12) {
    return address; // If the address is shorter than 12 characters, return it as is
  } else {
    const prefix = address.slice(0, 6); // Get the first six characters
    const suffix = address.slice(-6); // Get the last six characters
    return `${prefix}...${suffix}`; // Combine the first six, ..., and last six characters
  }
}

function ldToJsonConvertor(ld: { [x: string]: any; }) {
  const json = {} as any;
  for (const key in ld) {
    if (key === "@context") {
      json['context'] = ld[key];
    } else {
      json[key] = ld[key]
    }
  }
  return json;
}


export function getDIDDocJSON(doc: any) {
  return ldToJsonConvertor(JSON.parse(JSON.stringify(ldToJsonConvertor(doc), (key, value) => {
    if (value === "" || (Array.isArray(value) && value.length === 0)) {
      return undefined;
    }
    return value;
  })))

}

function clean(str: string) {
  return str.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

export function generateChallenge() {
  return clean(crypto.randomBytes(32).toString("base64"));
}

