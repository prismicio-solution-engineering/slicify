import { getShowcaseWebsites } from "@/utils/getShowcaseWebsites";
import { Client, Content, asImageSrc, asText } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { ShowcaseCard } from "./ShowcaseCard";

export type Website = {
  name: string;
  screenshot: {
    url: string;
    alt?: string;
  };
  link: {
    link_type: string;
    url: string;
    target: string;
  };
  technology?: string;
  industry?: string;
};


/**
 * Props for `FeaturedWebsitesList`.
 */
export type FeaturedWebsitesListProps =
  SliceComponentProps<Content.FeaturedWebsitesListSlice>;

/**
 * Component for "FeaturedWebsitesList" Slices.
 */
const FeaturedWebsitesList = ({
  slice,
  context,
}: FeaturedWebsitesListProps): JSX.Element => {
  const websiteList: Website[] =
    slice.variation == "autoList"
      ? context.showcaseWebsites.map((website) => ({
          name: asText(website.data.name),
          screenshot: website.data.screenshot,
          link: website.data.link,
          technology: website.data.website_technology.uid,
          industry: website.data.industry.uid,
        }))
      : slice.items.map((website) => website.website);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={slice.primary.anchor || undefined}
    >
      {websiteList?.length > 0 ? (
        <div className="grid gird-cols-1 py-16 px-10 sm:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-6">
          {websiteList.map((website: Website, idx: number) => (
            <ShowcaseCard website={website} key={idx} />
          ))}
        </div>
      ) : (
        <p>No results</p>
      )}
    </section>
  );
};

export default FeaturedWebsitesList;
