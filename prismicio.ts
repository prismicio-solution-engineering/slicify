import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import sm from "./slicemachine.config.json";

export const repositoryName = process.env.NEXT_PUBLIC_API_ENDPOINT ? process.env.NEXT_PUBLIC_API_ENDPOINT : prismic.getRepositoryName(sm.apiEndpoint);

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes = [
  {
    type: "home_page",
    path: "/",
  },
  {
    type: 'blog_index',
    path: '/blog',
},
{
    type: 'blog_article',
    path: '/blog/:uid',
},
{
    type: 'landing_page',
    path: '/lp/:uid',
},
];

export function createClient({
  previewData,
  req,
  ...config
}: prismicNext.CreateClientConfig = {}) {
  const client = prismic.createClient(repositoryName, { routes, ...config });

  prismicNext.enableAutoPreviews({ client, previewData, req });

  return client;
}
