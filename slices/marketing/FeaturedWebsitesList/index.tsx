import { Content, asText } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { ShowcaseCard } from "./ShowcaseCard";
import { Container } from "@/components/Container";
import { UnderlineDoodle } from "@/components/UnderlineDoodle";

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
      className="py-16 sm:px-16 md:py-24 lg:py-24"
    >
      <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-3xl text-center font-display leading-10 tracking-tight text-gray-900">
                {children}
              </h2>
            ),
            strong: ({ children }) => {
              return (
                <>
                  <span className="relative whitespace-nowrap text-blue-600">
                    <UnderlineDoodle className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70" />
                    <span className="relative">{children}</span>
                  </span>
                </>
              );
            },
          }}
        />
        <PrismicRichText
          field={slice.primary.description}
          components={{
            paragraph: ({ children }) => (
              <p className="mt-4 text-lg tracking-tight text-slate-700">
                {children}
              </p>
            ),
          }}
        />
      </div>
      {websiteList?.length > 0 ? (
        <Container className="grid gird-cols-1 py-16 px-10 sm:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-6">
          {websiteList.map((website: Website, idx: number) => (
            <ShowcaseCard website={website} key={idx} />
          ))}
        </Container>
      ) : (
        <p>No results</p>
      )}
    </section>
  );
};

export default FeaturedWebsitesList;
