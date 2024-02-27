import { createClient } from "@sanity/client";

const client = createClient({
  projectId: 'bb1yecey',
  dataset: "production",
  useCdn: true,
  apiVersion: '2024-01-29'
});

export default client;
