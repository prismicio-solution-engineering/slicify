import { getShowcaseWebsites } from "@/utils/getShowcaseWebsites";
import { Client, Content, asText } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { ShowcaseCard } from "./ShowcaseCard";

const products = [
  {
    id: 1,
    name: "Machined Pen",
    color: "Black",
    price: "$35",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
    imageAlt:
      "Black machined steel pen with hexagonal grip and small white logo at top.",
    availableColors: [
      { name: "Black", colorBg: "#111827" },
      { name: "Brass", colorBg: "#FDE68A" },
      { name: "Chrome", colorBg: "#E5E7EB" },
    ],
  },
  // More products...
];

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
  const websiteList =
    slice.variation == "autoList" ? context.showcaseWebsites : slice.items;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={slice.primary.anchor || undefined}
    >
      {websiteList?.length > 0 ? (
        <div className="grid gird-cols-1 py-16 px-10 sm:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-6">
          {websiteList.map((website, idx) => (
            <ShowcaseCard website={website} key={idx} />
          ))}
        </div>
        // <div className="bg-white">
        //   <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
        //     <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
        //       <PrismicRichText
        //         field={slice.primary.title}
        //         components={{
        //           heading2: ({ children }) => (
        //             <h2 className="text-3xl font-display tracking-tight text-gray-900">
        //               {children}
        //             </h2>
        //           ),
        //         }}
        //       />
        //       <PrismicNextLink
        //         field={slice.primary.link}
        //         className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
        //       >
        //         {slice.primary.link_text}
        //         <span aria-hidden="true"> &rarr;</span>
        //       </PrismicNextLink>
        //     </div>

        //     <div className="relative mt-8">
        //       <div className="relative -mb-6 w-full overflow-x-auto pb-6">
        //         <ul
        //           role="list"
        //           className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
        //         >
        //           {websiteList.map((website, idx) => (
        //             <li
        //               key={idx}
        //               className="inline-flex w-64 flex-col text-center lg:w-auto"
        //             >
        //               <div className="group relative">
        //                 {/* <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200"> */}
        //                 <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden relative bg-gray-F7">
        //                   <PrismicNextImage
        //                     fill
        //                     field={website.data.screenshot}
        //                     // className="h-full w-full object-cover object-center group-hover:opacity-75"
        //                     className="opacity-100 scale-100 transition-all ease-in-out duration-500 object-cover"
        //                   />
        //                 </div>
        //                 <div className="mt-6">
        //                   <p className="text-sm text-gray-500">
        //                     {website.data.website_technology.uid}
        //                   </p>
        //                   <h3 className="mt-1 font-semibold text-gray-900">
        //                     <PrismicLink
        //                       field={website.data.link}
        //                       className="block rounded-2xl border-2 border-gray-EE p-3 pb-4 hover:border-gray-F7 hover:bg-gray-F7 transition-colors"
        //                     >
        //                       <span className="absolute inset-0" />
        //                       {asText(website.data.name)}
        //                     </PrismicLink>
        //                   </h3>
        //                   <p className="mt-1 text-gray-900">
        //                     {website.data.industry.uid}
        //                   </p>
        //                 </div>
        //               </div>
        //             </li>
        //           ))}
        //         </ul>
        //       </div>
        //     </div>

        //     <div className="mt-12 flex px-4 sm:hidden">
        //       <a
        //         href="#"
        //         className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
        //       >
        //         {slice.primary.link_text}
        //         <span aria-hidden="true"> &rarr;</span>
        //       </a>
        //     </div>
        //   </div>
        // </div>
      ) : (
        <p>No results</p>
      )}
    </section>
  );
};

export default FeaturedWebsitesList;
