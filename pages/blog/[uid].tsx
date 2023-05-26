import Head from "next/head";
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { components as mktComponents } from "@/slices/marketing";
import { components as blogComponents } from "@/slices/blog";
import {
  blogArticleGraphQuery,
} from "@/utils/graphQueries";
import { getLanguages } from "@/utils/getLanguages";
import BlogLayout from "@/components/BlogLayout";

type BlogArticleProps = InferGetStaticPropsType<typeof getStaticProps>;
type PageParams = { uid: string };

export default function BlogArticle({
  page,
  header,
  footer,
  languages,
}: BlogArticleProps) {
  return (
    <>
      <Head>
        <title>{page.data.meta_title || "Slicify - Blog Article"}</title>
        <meta
          name="description"
          content={
            page.data.meta_title ||
            "Slicify, nice article to understand slices for everyone."
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogLayout
        header={header.data}
        footer={footer.data}
        languages={languages}
        page={page}
      >
        <SliceZone
          slices={page.data.slices}
          components={{ ...mktComponents, ...blogComponents }}
        />
      </BlogLayout>
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
    const page =
      //    ^ Typed as BlogIndexDocument
      await client.getByUID<Content.BlogArticleDocument>(
        "blog_article",
        params.uid,
        { lang: locale }
      );

    const linkedBlogArticles =
      await client.getByUID<Content.BlogArticleDocument>(
        //    ^ Typed as BlogArticleDocument
        "blog_article",
        params.uid,
        {
          lang: locale,
          graphQuery: blogArticleGraphQuery,
        }
      );

    let index = 0;

    const pageWithArticles = {
      ...page,
      data: {
        ...page.data,
        slices: page?.data?.slices?.map((slice) => {
          if (slice.slice_type === "article_list") {
            index++;
            return {
              ...linkedBlogArticles?.data?.slices[index - 1],
            };
          }
          return {
            ...slice,
          };
        }),
        author: linkedBlogArticles?.data?.author,
        category: linkedBlogArticles?.data?.category,
      },
    };

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
          page: pageWithArticles,
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
  const documents = await client.getAllByType("blog_article", { lang: "*" });
  return {
    paths: documents.map((page) => `${prismicH.asLink(page)}`),
    fallback: false, // if a page has already been generated but doesn't show => display the cached page
  };
}
