import Head from "next/head";
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices/marketing";
import { getLanguages } from "@/utils/getLanguages";
import MarketingLayout from "@/components/MarketingLayout";

type BlogIndexProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function BlogIndex({
  page,
  header,
  footer,
  languages,
}: BlogIndexProps) {
  return (
    <>
      <Head>
        <title>{page.data.meta_title || "Slicify - Blog Home"}</title>
        <meta
          name="description"
          content={page.data.meta_title || "Slicify Blog, slices for everyone."}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
}: GetStaticPropsContext) {
  const client = createClient({ previewData });
  //    ^ Automatically contains references to document types

  const page = await client.getSingle<Content.BlogIndexDocument>("blog_index", {
    lang: locale,
  });
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

  return {
    props: {
      page,
      header,
      footer,
      languages,
    },
  };
}
