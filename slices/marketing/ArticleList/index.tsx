import type { Content } from "@prismicio/client";
import {
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import * as prismicT from "@prismicio/types";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

export type ArticleListProps = SliceComponentProps<Content.ArticleListSlice>;

const hasParentData = <
  TContentRelationshipField extends prismicT.ContentRelationshipField
>(
  contentRelationshipField: TContentRelationshipField
): contentRelationshipField is TContentRelationshipField & {
  linked_article?: Content.BlogArticleDocument["data"];
  linked_author?: Content.AuthorDocument["data"];
  linked_category?: Content.BlogCategoryDocument["data"];
} => {
  return (
    prismicH.isFilled.contentRelationship(contentRelationshipField) &&
    typeof contentRelationshipField.data === "object" &&
    contentRelationshipField.data !== null &&
    "parent" in contentRelationshipField.data
  );
};

function HorizontalThreeColumn({
  slice,
}: {
  slice: Content.ArticleListSliceHorizontalList;
  // | BlogArticleDocumentWithLinkedAuthor;
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
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {slice.items?.map(
            (post, idx) =>
              hasParentData(post.article) && (
                // <PrismicText field={slice.primary.link.data.parent.title} />
                <article
                  key={idx}
                  className="flex flex-col items-start justify-between roundedshadow-xl rounded-2xl bg-white shadow-xl shadow-slate-900/10"
                >
                  <div className="relative w-full">
                    <PrismicNextImage
                      className="aspect-[16/9] w-full rounded-t-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                      field={post.article.linked_article?.featured_image}
                      unoptimized
                    />
                  </div>
                  <div className="max-w-xl p-6">
                    <div className="flex items-center gap-x-4 text-xs">
                      {/* <time
                        dateTime={post.article.linked_article?.publication_date}
                        className="text-gray-500"
                      >
                        {post.article.linked_article?.publication_date}
                      </time> */}
                      <PrismicLink
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        field={post.article.linked_article?.category}
                      >
                        {post.article.linked_category?.category_name}
                      </PrismicLink>
                    </div>
                    <div className="group relative">
                      {/* <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <PrismicLink field={post.article}>
                          <span className="absolute inset-0" />
                          {children}
                        </PrismicLink>
                      </h3> */}
                      <PrismicRichText
                        field={post.article.linked_article?.title}
                        components={{
                          heading3: ({ children }) => (
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                              <PrismicLink field={post.article}>
                                <span className="absolute inset-0" />
                                {children}
                              </PrismicLink>
                            </h3>
                          ),
                        }}
                      />
                      <PrismicRichText
                        field={post.article.linked_article?.excerpt}
                        components={{
                          paragraph: ({ children }) => (
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                              {children}
                            </p>
                          ),
                        }}
                      />
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                      <PrismicNextImage
                        field={post.article.linked_author?.author_image}
                        alt=""
                        className="h-10 w-10 rounded-full bg-gray-100"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <PrismicLink
                            field={post.article.linked_article?.author}
                          >
                            <span className="absolute inset-0" />
                            {/* {post.article.linked_article?.author.data?.author_name} */}
                            {post.article.linked_author?.author_name}
                          </PrismicLink>
                        </p>
                        <p className="text-gray-600">
                          {/* {post.article.linked_article?.author.data?.role} */}
                          {post.article.linked_author?.author_role}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              )
          )}
        </div>
      </div>
    </div>
  );
}

function VerticalSingleColumn({
  slice,
}: {
  slice: Content.ArticleListSliceVerticalList;
}) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
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
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row rounded-2xl shadow-xl shadow-slate-900/10"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-l-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="py-2">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <img
                        src={post.author.imageUrl}
                        alt=""
                        className="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a>
                        </p>
                        <p className="text-gray-600">{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ArticleList({ slice }: ArticleListProps) {
  switch (slice.variation) {
    case "horizontalList":
      return <HorizontalThreeColumn slice={slice} />;
    case "verticalList":
      return <VerticalSingleColumn slice={slice} />;
  }
}
