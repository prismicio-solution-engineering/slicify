import Head from "next/head";
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { components as mktComponents } from "@/slices/marketing";
import { components as blogComponents } from "@/slices/blog";
import {
  blogArticleGraphQuery, blogArticleLinkedArticlesGraphQuery,
} from "@/utils/graphQueries";
import { getLanguages } from "@/utils/getLanguages";
import BlogLayout from "@/components/BlogLayout";
import { SliceZone as TSliceZone } from "@prismicio/types"

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

    const slug = params.uid.length > 1 ? params.uid[1] : params.uid[0];

    const page =
      //    ^ Typed as BlogArticleDocument
      await client.getByUID<prismic.Content.BlogArticleDocument>(
        "blog_article",
        // params.uid,
        slug,
        { lang: locale,
          graphQuery: blogArticleGraphQuery, }
      ).catch(e => {
        return null
      });

    if (page) {

      const [linkedBlogArticles,header,footer,languages] = await Promise.all([
        client.getByUID<prismic.Content.BlogArticleDocument>(
          "blog_article",
          slug,
          {
            lang: locale,
            graphQuery: blogArticleLinkedArticlesGraphQuery,
          }
        ),
        client.getSingle<prismic.Content.HeaderDocument>("header", {
          lang: locale,
        }),
        client.getSingle<prismic.Content.FooterDocument>("footer", {
          lang: locale,
        }),
        getLanguages(page, client, locales)
      ])

      page.data.slices = enrichSlices(page.data.slices, linkedBlogArticles.data.slices, ["article_list"])

      return {
        props: {
          page: page,
          header,
          footer,
          languages,
        },
        revalidate: 60,
      };
    }
  }

  return {
    notFound: true,
    revalidate: 60,
  };
}

// Paths
export async function getStaticPaths() {
  const client = createClient();
  const documents = await client.getAllByType("blog_article", { lang: "*" });

  return {
    paths: documents.map((page) => `${prismic.asLink(page)}`),
    fallback: 'blocking', // if a page has already been generated but doesn't show => display the cached page
  };
}

function enrichSlices(mainSlices: TSliceZone<prismic.Content.BlogArticleDocumentDataSlicesSlice>, linkedDataSlices: TSliceZone<prismic.Content.BlogArticleDocumentDataSlicesSlice>, slicesToEnrich: string[]) : TSliceZone<prismic.Content.BlogArticleDocumentDataSlicesSlice> {
  let index = 0;
  if(mainSlices.length > 0){
    const enrichedSlices = mainSlices.map((slice) => {
      if (slicesToEnrich.includes(slice.slice_type)) {
          index++;
          return linkedDataSlices[index - 1]
        }
        return slice;
    })
    return [enrichedSlices[0], ...enrichedSlices.slice(1)]
  }
  return []
}
