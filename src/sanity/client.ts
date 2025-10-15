import { createClient } from "next-sanity";
import { HttpsProxyAgent } from "https-proxy-agent";

const proxyUrl = process.env.https_proxy || process.env.HTTPS_PROXY || process.env.http_proxy || process.env.HTTP_PROXY;
export const proxyAgent: any = proxyUrl ? new (HttpsProxyAgent as any)(proxyUrl) : undefined;

global.fetch = ((originalFetch) => {
  return (resource: any, init?: any) => {
    const finalInit = { ...(init || {}), agent: proxyAgent };
    return originalFetch(resource, finalInit);
  };
})(global.fetch);

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  apiVersion: "2025-10-14",
  useCdn: false
});