import React, { useEffect, useState } from "react";
import { ArticleListVertical } from "@/components/ArticleListVertical";
import { Search } from "@/components/Search";
import { performSearch } from "@/utils/performSearch";
import { NextApiRequest } from "next";
import { BlogArticleDocument } from "@/prismicio-types";

interface SearchProps {
  onSearch: (query: string) => void;
  initialQuery: string;
}

const SearchPage: React.FC<SearchProps> = ({ initialQuery }) => {
  const [searchResults, setSearchResults] = useState<BlogArticleDocument[] | undefined>(undefined);

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
      <h1>Search Page</h1>
      <Search onSearch={handleSearch} initialQuery={initialQuery} />
      <ArticleListVertical articles={searchResults ?? []} page={null} />
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
