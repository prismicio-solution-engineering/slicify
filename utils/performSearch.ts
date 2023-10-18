import * as prismic from "@prismicio/client";
import { blogIndexGraphQuery } from "@/utils/graphQueries";

const client = prismic.createClient(
    "https://slicify-dianka.cdn.prismic.io/api/v2"
);

export const performSearch = async (query: string) => {
    if (query) {
        try {
            const response = await client.getByType("blog_article", {
                filters: [
                    prismic.filter.fulltext("my.blog_article.title", query)],
                graphQuery: blogIndexGraphQuery,
            });
            return response.results;
        } catch (error) {
            console.error("Error searching Prismic:", error);
            return undefined;
        }
    } else {
        return [];
    }
};