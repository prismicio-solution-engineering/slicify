import { asText, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicRichText } from "@prismicio/react";

export const ShowcaseCard = ({ website }) => {
    return (
      <PrismicLink
        field={website.data.link}
        className="block rounded-2xl border-2 border-gray-EE p-3 pb-4 hover:border-gray-F7 hover:bg-gray-F7 transition-colors"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-xl shadow-website-screenshot" />
          <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden relative bg-gray-F7">
            <PrismicNextImage
              fill
              className="opacity-100 scale-100 transition-all ease-in-out duration-500 object-cover"
              field={website.data.screenshot}
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            />
          </div>
        </div>
        <footer className="flex items-center justify-between text-base font-headings text-gray-900 mt-4 px-2">
        <h2>{asText(website.data.name)}</h2>
          <div className="flex items-center gap-1">
            {website.data.website_technology.uid &&
              website.data.website_technology.uid}
          </div>
        </footer>
      </PrismicLink>
    );
  };