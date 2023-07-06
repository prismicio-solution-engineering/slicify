import {
  BlogArticleDocument,
  BlogIndexDocument,
} from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { PropsWithChildren } from "react";
import * as prismic from "@prismicio/client";
import {
  isOfTypeAuthorDocument,
  isOfTypeBlogCategoryDocument,
} from "@/utils/graphQueries";

type BlogIndexLayoutProps = {
  articles: BlogArticleDocument[] | null;
  page: BlogIndexDocument;
};

export function ArticleListVertical(
  props: PropsWithChildren<BlogIndexLayoutProps>
) {
  return (
    <div className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <PrismicRichText
          field={props.page.data.title}
          components={{
            heading1: ({ children }) => (
              <h1 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                {children}
              </h1>
            ),
          }}
        />
        <PrismicRichText
          field={props.page.data.description}
          components={{
            paragraph: ({ children }) => (
              <p className="mt-2 text-lg leading-8 text-slate-700">
                {children}
              </p>
            ),
          }}
        />
        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
          {props.articles?.map((article) => (
            <article
              key={article.id}
              className="relative isolate flex flex-col gap-8 lg:flex-row rounded-2xl shadow-xl shadow-slate-900/10"
            >
              <div className="relative aspect-[16/9] flex-none sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <PrismicNextImage
                  field={article.data.featured_image}
                  className="absolute inset-0 h-full w-full lg:rounded-l-2xl lg:rounded-r-none rounded-t-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="py-2 flex-1 px-4 lg:px-0">
                <div className="flex flex-row items-center text-sm gap-x-4">
                  <time
                    dateTime={article.last_publication_date && prismic
                      .asDate(article.last_publication_date)
                      .toISOString()}
                  >
                    {article.last_publication_date && prismic
                      .asDate(article.last_publication_date)
                      .toLocaleString(article.lang, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                  </time>
                  {isOfTypeBlogCategoryDocument(article.data?.category) && (
                    <PrismicLink
                      document={article.data.category}
                      className="relative rounded-full bg-grey-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-transparent hover:bg-gray-100"
                    >
                      {article.data.category.data?.category_name}
                    </PrismicLink>
                  )}
                </div>
                <PrismicLink document={article}>
                  <div className="group relative mt-4">
                    <PrismicRichText
                      field={article.data.title}
                      components={{
                        heading1: ({ children }) => (
                          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <span className="absolute inset-0" />
                            {children}
                          </h3>
                        ),
                      }}
                    />
                    <PrismicRichText
                      field={article.data.excerpt}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="mt-5 text-sm leading-6 text-gray-600">
                            {children}
                          </p>
                        ),
                      }}
                    />
                  </div>
                </PrismicLink>
                {isOfTypeAuthorDocument(article.data?.author) && (
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <PrismicNextImage
                        field={article.data.author.data?.author_image}
                        className="h-10 w-10 rounded-full object-cover bg-gray-50"
                        width={48}
                        height={48}
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <PrismicLink document={article.data.author}>
                            <span className="absolute inset-0" />
                            {article.data.author.data?.author_name}
                          </PrismicLink>
                        </p>
                        <p className="text-gray-600">
                          {article.data.author.data?.author_role}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
