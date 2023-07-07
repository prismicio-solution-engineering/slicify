import type { Content } from "@prismicio/client";

import {
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  isOfTypeAuthorDocument,
  isOfTypeBlogArticleDocument,
  isOfTypeBlogCategoryDocument,
} from "@/utils/graphQueries";

export type ArticleListProps = SliceComponentProps<Content.ArticleListSlice>;

function HorizontalThreeColumn({
  slice,
}: {
  slice: Content.ArticleListSliceHorizontalList;
}) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => (
                <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                  {children}
                </h2>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.description}
            components={{
              paragraph: ({ children }) => (
                <p className="mt-2 text-lg leading-8 text-slate-700">
                  {children}
                </p>
              ),
            }}
          />
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:max-w-none lg:grid-cols-3">
          {slice.items?.map((post, idx) => {
            return (
              isOfTypeBlogArticleDocument(post.article) && (
                <article
                  key={idx}
                  className="flex flex-col items-start justify-between roundedshadow-xl rounded-2xl bg-white shadow-xl shadow-slate-900/10"
                >
                  <div className="relative w-full">
                    <PrismicNextImage
                      className="aspect-[16/9] w-full rounded-t-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                      field={post.article?.data?.featured_image}
                      unoptimized
                    />
                  </div>
                  <div className="max-w-xl p-6">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time
                        dateTime={post.article.last_publication_date && prismic
                          .asDate(post.article.last_publication_date as `${number}-${number}-${number}T${number}:${number}:${number}+${number}`)
                          .toISOString()}
                      >
                        {post.article.last_publication_date && prismic
                          .asDate(post.article.last_publication_date  as `${number}-${number}-${number}T${number}:${number}:${number}+${number}`)
                          .toLocaleString(post.article.lang, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                      </time>
                      {isOfTypeBlogCategoryDocument(
                        post.article.data?.category
                      ) && (
                        <PrismicLink
                          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                          field={post.article.data?.category}
                        >
                          {post.article.data?.category.data?.category_name}
                        </PrismicLink>
                      )}
                    </div>
                    <PrismicLink field={post.article}>
                      <div className="group relative mt-4">
                        <PrismicRichText
                          field={post.article.data?.title}
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
                          field={post.article.data?.excerpt}
                          components={{
                            paragraph: ({ children }) => (
                              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                {children}
                              </p>
                            ),
                          }}
                        />
                      </div>
                    </PrismicLink>
                    {isOfTypeAuthorDocument(post.article.data?.author) && (
                      <div className="relative mt-8 flex items-center gap-x-4">
                        <PrismicNextImage
                          field={post.article.data?.author.data?.author_image}
                          className="h-10 w-10 rounded-full object-cover bg-gray-100"
                          width={48}
                          height={48}
                        />
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900">
                            <PrismicLink field={post.article.data?.author}>
                              <span className="absolute inset-0" />
                              {post.article.data?.author.data?.author_name}
                            </PrismicLink>
                          </p>
                          <p className="text-gray-600">
                            {post.article.data?.author.data?.author_role}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function ArticleList({ slice }: ArticleListProps) {
  switch (slice.variation) {
    case "horizontalList":
      return <HorizontalThreeColumn slice={slice} />;
  }
}
