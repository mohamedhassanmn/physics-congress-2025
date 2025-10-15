import { createClient } from "next-sanity";
import { HttpsProxyAgent } from "https-proxy-agent";

const proxyUrl = process.env.https_proxy || process.env.HTTPS_PROXY || process.env.http_proxy || process.env.HTTP_PROXY;
const proxyAgent: any = proxyUrl ? new (HttpsProxyAgent as any)(proxyUrl) : undefined;

const customFetch = (resource: RequestInfo, init?: RequestInit) => {
   console.log("Fetching:", resource, "via proxy:", !!proxyAgent);
  const initWithAgent = { ...(init || {}), agent: proxyAgent } as any;
  return fetch(resource, initWithAgent as RequestInit);
};

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  apiVersion: "2025-10-14",
  useCdn: false,
  fetch: customFetch as unknown as any,
});