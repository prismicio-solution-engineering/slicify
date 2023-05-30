import Head from "next/head";
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
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
      //    ^ Typed as BlogIndexDocument
      await client.getByUID<Content.BlogArticleDocument>(
        "blog_article",
        // params.uid,
        slug,
        { lang: locale,
          graphQuery: blogArticleGraphQuery, }
      );

    const linkedBlogArticles =
      await client.getByUID<Content.BlogArticleDocument>(
        //    ^ Typed as BlogArticleDocument
        "blog_article",
        slug,
        {
          lang: locale,
          graphQuery: blogArticleLinkedArticlesGraphQuery,
        }
      );

    const pageWithArticles = {
      ...page,
      data: {
        ...page.data,
        slices: enrichSlices(page.data.slices, linkedBlogArticles.data.slices, ["article_list"])
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

function enrichSlices(mainSlices: TSliceZone<Content.BlogArticleDocumentDataSlicesSlice>, linkedDataSlices: TSliceZone<Content.BlogArticleDocumentDataSlicesSlice>, slicesToEnrich: string[]) : TSliceZone<Content.BlogArticleDocumentDataSlicesSlice> {
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
