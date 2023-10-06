import React, { useEffect, useState } from "react";
import { ArticleListVertical } from "@/components/ArticleListVertical";
import { Search } from "@/components/Search";
import { performSearch } from "@/utils/performSearch";
import { GetStaticPropsContext, NextApiRequest } from "next";
import { BlogArticleDocument } from "@/prismicio-types";
import MarketingLayout from "@/components/MarketingLayout";
import { getLanguages } from "@/utils/getLanguages";
import { blogIndexGraphQuery } from "@/utils/graphQueries";
import { createClient, Content } from "@prismicio/client";
import Head from "next/head";

interface SearchProps {
  onSearch: (query: string) => void;
  initialQuery: string;
}

const SearchPage: React.FC<SearchProps> = ({
  initialQuery,
  page,
  header,
  footer,
  languages,
}) => {
  const [searchResults, setSearchResults] = useState<
    BlogArticleDocument[] | undefined
  >(undefined);

  const handleSearch = async (query: string) => {
    const results = await performSearch(query);
    setSearchResults(results);
  };

  // If there's an Initial query, performSearch
  useEffect(() => {
    if (initialQuery.trim() !== "") {
      // Pass the initialQuery to performSearch
      performSearch(initialQuery).then((results) => {
        setSearchResults(results);
      });
    }
  }, [initialQuery]);

  return (
    <div>
      <Head>
        <title>{page.data.meta_title || "Slicify - Blog Home"}</title>
        <meta
          name="description"
          content={page.data.meta_title || "Slicify Blog, slices for everyone."}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Search Page</h1>
      <MarketingLayout
        header={header.data}
        footer={footer.data}
        languages={languages}
      >
        <Search onSearch={handleSearch} initialQuery={initialQuery} />
        <ArticleListVertical articles={searchResults ?? []} page={null} />
      </MarketingLayout>
    </div>
  );
};


export async function getServerSideProps({ query }: NextApiRequest) {
  // Get the initial query parameter from the URL
  const initialQuery = query.query || "";

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

  const languages = await getLanguages(page, client, locales);
  return {
    props: { initialQuery },
  };
}

export default SearchPage;
