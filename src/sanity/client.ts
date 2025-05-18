import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "7v8y29gj",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});