import Head from "next/head";
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { components } from "@/slices/marketing";
import MarketingLayout from "@/components/MarketingLayout";
import { getLanguages } from "@/utils/getLanguages";

type LandingPageProps = InferGetStaticPropsType<typeof getStaticProps>;
type PageParams = { uid: string };

export default function LandingPage({
  page,
  header,
  footer,
  languages,
}: LandingPageProps) {
  return (
    <>
      <Head>
        <title>{page.data.meta_title || "Slicify - Landing Page"}</title>
        <meta
          name="description"
          content={page.data.meta_title || "Slicify, slices for everyone."}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MarketingLayout
        header={header.data}
        footer={footer.data}
        languages={languages}
      >
        <SliceZone slices={page.data.slices} components={components} />
      </MarketingLayout>
    </>
  );
}

export async function getStaticProps({
  locales,
  locale,
  previewData,
  params,
}: GetStaticPropsContext<PageParams>) {
  const client = createClient({ previewData });
  //    ^ Automatically contains references to document types

  if (params && params.uid) {
    const page = await client.getByUID<Content.LandingPageDocument>(
      "landing_page",
      params.uid,
      { lang: locale }
    );
    //    ^ Typed as BlogIndexDocument

    const header = await client.getSingle<Content.HeaderDocument>("header", {
      lang: locale,
    });
    //    ^ Typed as HeaderDocument

    const footer = await client.getSingle<Content.FooterDocument>("footer", {
      lang: locale,
    });
    //    ^ Typed as FooterDocument

    const languages = await getLanguages(page, client, locales);

    if (page) {
      return {
        props: {
          page,
          header,
          footer,
          languages,
        },
      };
    }
  }
  return {
    notFound: true,
  };
}

// Paths
export async function getStaticPaths() {
  const client = createClient();
  const documents = await client.getAllByType("landing_page", { lang: "*" });
  return {
    paths: documents.map((page) => `${prismicH.asLink(page)}`),
    fallback: false, // if a page has already been generated but doesn't show => display the cached page
  };
}
