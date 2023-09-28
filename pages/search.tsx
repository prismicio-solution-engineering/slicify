// pages/blog.js
import React, { useState } from 'react';
import * as prismic from '@prismicio/client';
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');
  
    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setQuery(e.target.value);
    };
  
    const handleSearch = () => {
      onSearch(query);
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };
  
const SearchPage = () => {

  const [searchResults, setSearchResults] = useState([]);
  
  const client = prismic.createClient("https://slicify-dianka.cdn.prismic.io/api/v2");

  const performSearch = async (query: string) => {
    if (query) {
      try {
        const response = await client.get({
            filters: [
                prismic.filter.fulltext('my.blog_article.title', query)
            ]
        });

        setSearchResults(response);
      } catch (error) {
        console.error('Error searching Prismic:', error);
      }
    } else {
      setSearchResults([]); // Clear results if query is empty
    }
  };

  return (
    <div>
      <h1>Search Page</h1>
      <Search onSearch={performSearch} />
      <ul>
        {searchResults.map((result, idx) => (
          <li key={idx}>
            <h2>{result.data.my.blog_article.title}</h2> {/* Adjust the field name */}
            <p>{result.data.my.blog_article.description}</p> {/* Adjust the field name */}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default SearchPage;
