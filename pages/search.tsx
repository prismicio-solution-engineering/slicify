// pages/blog.js
import React, { useEffect, useState } from "react";
import * as prismic from "@prismicio/client";
import { useRouter } from "next/router";
import { blogIndexGraphQuery } from "@/utils/graphQueries";
import { ArticleListVertical } from "@/components/ArticleListVertical";
import { NextApiRequest } from "next";
import { BlogArticleDocument } from "@/prismicio-types";

interface SearchProps {
  onSearch: (query: string) => void;
  initialQuery: string;
}

const Search : React.FC<SearchProps> = ({ onSearch, initialQuery }) => {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery || "");

  const handleSearch = () => {
    router.push({
      pathname: router.pathname,
      query: { query: query },
    });
    onSearch(query);
  };

  return (
    <div>
      <div className="relative mt-2 flex items-center w-full sm:max-w-xs">
        <input
          type="text"
          placeholder="Search..."
          name="search"
          id="search"
          className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-vibrant-blue sm:text-sm sm:leading-6"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const SearchPage : React.FC<SearchProps> = ({ initialQuery }) => {
  const [searchResults, setSearchResults] = useState<BlogArticleDocument[]>([]);

  const client = prismic.createClient(
    "https://slicify-dianka.cdn.prismic.io/api/v2"
  );

  const performSearch = async (query: string) => {
    if (query) {
      try {
        const response = await client.getByType("blog_article", {
          filters: [prismic.filter.fulltext("my.blog_article.title", query)],
          graphQuery: blogIndexGraphQuery,
        });
        setSearchResults(response.results);
      } catch (error) {
        console.error("Error searching Prismic:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  // If there's an Initial query, performSearch
  useEffect(() => {
    if (initialQuery.trim() !== "") {
      performSearch(initialQuery);
    }
  }, [initialQuery]);

  return (
    <div>
      <h1>Search Page</h1>
      <Search onSearch={performSearch} initialQuery={initialQuery} />
      <ArticleListVertical articles={searchResults} page={null} />
    </div>
  );
};

export async function getServerSideProps({ query }: NextApiRequest) {
  // Get the initial query parameter from the URL
  const initialQuery = query.query || "";

  return {
    props: { initialQuery },
  };
}

export default SearchPage;
