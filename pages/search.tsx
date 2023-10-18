import React, { useEffect, useState } from "react";
import { ArticleListVertical } from "@/components/ArticleListVertical";
import { performSearch } from "@/utils/performSearch";
import { GetServerSidePropsContext, InferGetStaticPropsType } from "next";
import { BlogArticleDocument } from "@/prismicio-types";
import MarketingLayout from "@/components/MarketingLayout";
import { getLanguages } from "@/utils/getLanguages";
import { Content } from "@prismicio/client";
import { createClient } from "@/prismicio";
import Head from "next/head";

type SearchPageProps = InferGetStaticPropsType<typeof getServerSideProps>;

const SearchPage = ({
  initialQuery,
  page,
  header,
  footer,
  languages,
  results,
}: SearchPageProps) => {
  const [searchResults, setSearchResults] = useState<
    BlogArticleDocument[] | undefined
  >(undefined);

  return (
    <div>
      <Head>
        <title>{`Search results for ${initialQuery}`}</title>
        <meta
          name="description"
          content={"Slicify Search results, slices for everyone."}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MarketingLayout
        header={header.data}
        footer={footer.data}
        languages={languages}
      >
        {/* <Search onSearch={handleSearch} initialQuery={initialQuery} /> */}
        <ArticleListVertical articles={results ?? []} page={page} />
      </MarketingLayout>
    </div>
  );
};

export async function getServerSideProps({
  query,
  locales,
  locale,
  previewData,
}: GetServerSidePropsContext) {
  // Get the initial query parameter from the URL
  const initialQuery = query.query || "";
  const searchQuery = Array.isArray(initialQuery)
    ? initialQuery[0]
    : initialQuery;

  const client = createClient({ previewData });
  //    ^ Automatically contains references to document types

  const [page, header, footer] = await Promise.all([
    client.getSingle<Content.SearchDocument>("search", {
      lang: locale,
    }),
    client.getSingle<Content.HeaderDocument>("header", {
      lang: locale,
    }),
    client.getSingle<Content.FooterDocument>("footer", {
      lang: locale,
    }),
  ]);

  // Pass the initialQuery to performSearch
  const results = await performSearch(searchQuery ? searchQuery.trim() : "");

  const languages = await getLanguages(page, client, locales);
  return {
    props: { initialQuery, page, header, footer, languages, results },
  };
}

export default SearchPage;
