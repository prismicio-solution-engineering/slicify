import Head from "next/head";
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices/marketing";
import { getLanguages } from "@/utils/getLanguages";
import MarketingLayout from "@/components/MarketingLayout";
import { ArticleListVertical } from "@/components/ArticleListVertical";
import { blogIndexGraphQuery } from "@/utils/graphQueries";

type BlogIndexProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function BlogIndex({
  page,
  header,
  footer,
  languages,
  articles,
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
        <ArticleListVertical 
          articles={articles}
          page={page}
        />
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

  const [page,header,footer,articles] = await Promise.all([
    client.getSingle<Content.BlogIndexDocument>("blog_index", {
      lang: locale,
    }),
    client.getSingle<Content.HeaderDocument>("header", {
        lang: locale,
    }),
    client.getSingle<Content.FooterDocument>("footer", {
        lang: locale,
    }),
    client.getAllByType("blog_article", {
      lang: locale,
      graphQuery: blogIndexGraphQuery,
    }).catch(e => {
      return null
    })
  ])

  const languages = await getLanguages(page, client, locales);

  return {
    props: {
      page,
      header,
      footer,
      languages,
      articles,
    },
    revalidate: 60,
  };
}
