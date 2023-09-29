// utils/prismic.js
import { createClient } from "@/prismicio";


const client = createClient({ previewData });

export const fetchBlogArticles = async (searchQuery) => {

    

//   const response = await prismicClient.query([
//     // Use the Prismic fulltext predicate for search
//     // Replace 'blog_article' with your custom type's API ID
//     {
//       type: 'blog_article',
//       q: searchQuery,
//     },
//   ]);

  const response = await client.getAllByType("blog_article", {q: searchQuery,})
  .catch(e => {
    return null
  });

  return response.results;
};
