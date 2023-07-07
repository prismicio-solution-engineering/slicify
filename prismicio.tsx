import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import sm from "./slicemachine.config.json";
import { KeyTextField } from "@prismicio/client";
import Link, { LinkProps } from "next/link";

export const repositoryName = process.env.NEXT_PUBLIC_PRISMIC_REPO
  ? process.env.NEXT_PUBLIC_PRISMIC_REPO
  : prismic.getRepositoryName(sm.apiEndpoint);

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes = [
  {
    type: "home_page",
    path: "/:lang/",
  },
  {
    type: "blog_index",
    path: "/:lang/blog",
  },
  {
    type: "blog_article",
    resolvers: {
      category: "category",
    },
    path: "/:lang/blog/:category?/:uid",
  },
  {
    type: "landing_page",
    path: "/:lang/lp/:uid",
  }
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

interface AnchorLinkProps extends LinkProps {
  anchor?: KeyTextField;
}

export const AnchorLink = ({ ...props }: AnchorLinkProps) => {
  const resolvedHref = props.href + (props.anchor ? `#${props.anchor}` : "");
  return <Link {...props} href={resolvedHref} />;
};
