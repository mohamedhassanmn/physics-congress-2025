import { createClient } from "next-sanity";
import HttpsProxyAgent from "https-proxy-agent";

const proxyUrl = process.env.HTTPS_PROXY || undefined;

const proxyAgent: any = (() => {
  if (!proxyUrl) return undefined;
  const Agent: any = HttpsProxyAgent;
  try {
    return new Agent(proxyUrl);
  } catch (err) {
    return Agent(proxyUrl);
  }
})(); 

const customFetch = (resource: RequestInfo, init?: RequestInit) => {
  const initWithAgent = { ...(init || {}), agent: proxyAgent };
  return fetch(resource, initWithAgent as RequestInit);
};

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2025-10-14",
  useCdn: false,
  fetch: customFetch as unknown as any,
});