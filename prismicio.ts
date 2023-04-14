import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import sm from "./sm.json";

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes = [
  {
    type: "home_page",
    path: "/",
  },
];

export function createClient({
  previewData,
  req,
  ...config
}: prismicNext.CreateClientConfig = {}) {
  const client = prismic.createClient("slicify", { routes, ...config });

  prismicNext.enableAutoPreviews({ client, previewData, req });

  return client;
}
