import * as prismic from "@prismicio/client";

const client = prismic.createClient("https://prismic-main.cdn.prismic.io/api/v2")

export const getShowcaseWebsites = async (size: number) => {
    try {
        const websiteList = await client.getByType("website", {
            filters: [prismic.filter.at("my.website.showcase", true)],
            pageSize: size,
            orderings: {
              field: "document.last_publication_date",
              direction: "desc",
            },
          });
        return websiteList.results;
    } catch(error) {
        console.log("Error fetching Showcase websites :", error);
        return [];
    }
}