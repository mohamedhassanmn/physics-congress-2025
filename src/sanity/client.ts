import fetch from 'node-fetch';
import { HttpsProxyAgent } from "https-proxy-agent";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;
const apiVersion = "2025-10-14";

if (!projectId || !dataset) {
  throw new Error("SANITY_PROJECT_ID and SANITY_DATASET must be set in the environment");
}

const proxyUrl = process.env.https_proxy || process.env.HTTPS_PROXY || process.env.http_proxy || process.env.HTTP_PROXY;
const proxyAgent: any = proxyUrl ? new (HttpsProxyAgent as any)(proxyUrl) : undefined;
const baseUrl = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`;

export async function querySanity(groqQuery: string): Promise<any> {
  const encodedQuery = encodeURIComponent(groqQuery);
  const res = await fetch(`${baseUrl}?query=${encodedQuery}`, { agent: proxyAgent } as any);
  if (!res.ok) throw new Error(`Sanity error: ${res.status}`);
  return res.json();
}
