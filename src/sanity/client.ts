import { createClient } from "next-sanity";
import HttpsProxyAgent from "https-proxy-agent";

const proxyUrl = process.env.https_proxy || process.env.HTTPS_PROXY || process.env.http_proxy || process.env.HTTP_PROXY;
const proxyAgent: any = proxyUrl ? new (HttpsProxyAgent as any)(proxyUrl) : undefined;

(async (proxyAgent) => {
  try {
    const res = await fetch(
      "https://78y29gj.api.sanity.io/v2025-07-08/data/query/production?query=*[_type=='post'][0]",
      ({ agent: proxyAgent } as any),
    );
    console.log("Status:", res.status);
    console.log(await res.json());
  } catch (err) {
    console.error("Fetch error:", err);
  }
})(proxyAgent);

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

(async () => {
  try {
    const result = await client.fetch(`*[_type == "post"][0]`);
    console.log("Sanity fetch successful:", result);
  } catch (err) {
    console.error("Sanity fetch error:", err);
  }
})();