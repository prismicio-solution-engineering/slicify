import { BlogArticleDocument, FooterDocumentData, HeaderDocumentData } from "@/prismicio-types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PropsWithChildren } from "react";
import { PrismicNextImage } from "@prismicio/next";
import { BlogArticleDocumentWithLinkedAuthor } from "@/pages/blog/[uid]";
import { PrismicRichText } from "@prismicio/react";
import { UnderlineDoodle } from "./UnderlineDoodle";

type BlogLayoutProps = {
    header: HeaderDocumentData,
    footer: FooterDocumentData,
    languages: {
        url: string,
        lang_name: string
    }[],
    author: BlogArticleDocumentWithLinkedAuthor,
    page: BlogArticleDocument
}

export default function BlogLayout(props: PropsWithChildren<BlogLayoutProps>) {
    return (
        <main>
            <Header header={props.header} languages={props.languages} />
            <section>
                <div className="relative isolate overflow-hidden bg-black px-6">
                    <PrismicNextImage
                        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                        field={props.page.data.featured_image}
                        width={2245}
                        height={1636}
                        unoptimized
                    />
                    <div className="mx-auto p-12 px-14 rounded-xl my-16 max-w-4xl bg-white bg-opacity-50 flex flex-col gap-6">
                        <div className="text-gray-500 border-l-2 border-l-light-blue-70 pl-3 text-base">
                            <time dateTime={props.page.last_publication_date}>
                                {new Date(props.page.last_publication_date).toLocaleDateString(
                                    props.page.lang,
                                    { year: "numeric", month: "short", day: "numeric" }
                                )}
                            </time>
                        </div>
                        <PrismicRichText
                            field={props.page.data.title}
                            components={{
                                heading1: ({ children }) => (
                                    <h1 className="font-display text-5xl font-medium tracking-tight text-dark-blue">
                                        {children}
                                    </h1>
                                ),
                                label: ({ node, children }) => {
                                    return (
                                        <>
                                            {node.data.label === "highlight" && (
                                                <span className="relative font-display whitespace-nowrap text-vibrant-blue">
                                                    <UnderlineDoodle className="absolute left-0 top-2/3 h-[0.58em] w-full fill-light-blue-70" />
                                                    <span className="relative">{children}</span>
                                                </span>
                                            )}
                                        </>
                                    );
                                },
                            }}
                        />
                        <PrismicRichText
                            field={props.page.data.excerpt}
                            components={{
                                paragraph: ({ children }) => (
                                    <p className="font-sans text-lg tracking-tight text-dark-blue">
                                        {children}
                                    </p>
                                ),
                            }}
                        />
                        {props.author.data &&
                            <figcaption className="relative flex items-center gap-4 text-left">
                                <div className="overflow-hidden rounded-full bg-slate-50">
                                    <PrismicNextImage
                                        className="h-12 w-12 object-cover"
                                        alt=""
                                        field={props.author.data.author.data?.author_image}
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <div>
                                    <div className="font-display text-base text-slate-900">
                                        {props.author.data.author.data?.author_name} -{" "}
                                        <span className="text-slate-500">
                                            {props.author.data.author.data?.author_role}
                                        </span>
                                    </div>
                                </div>
                            </figcaption>
                        }
                    </div>
                </div>
            </section>
            {/* Remove className to have full width */}
            {props.children}
            <Footer {...props.footer} />
        </main>
    );
}
