import type { Content } from "@prismicio/client";
import { PrismicLink, PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type TextProps = SliceComponentProps<Content.TextSlice>;

export default function Text({ slice }: TextProps) {
  // switch (slice.variation) {
  //   case "default":
  //     return <CtaSimple slice={slice} withBackground={true} />;
  //   case "whiteBackground":
  //     return <CtaSimple slice={slice} withBackground={false} />;
  //   case "withImageRight":
  //     return <CtaWithImage slice={slice} imageRight={true} />;
  //   case "withImageLeft":
  //     return <CtaWithImage slice={slice} imageRight={false} />;
  // }
  return (
    <section className="mx-auto prose">
      <PrismicRichText
        field={slice.primary.text_section}
        // components={{
        //   heading2: ({ children }) => (
        //     <h2 className="mt-12 mb-6 font-display text-3xl tracking-tight text-dark-blue sm:text-4xl">
        //       {children}
        //     </h2>
        //   ),
        //   heading3: ({ children }) => (
        //     <h3 className="mt-10 mb-6 font-display text-2xl tracking-tight text-dark-blue sm:text-3xl">
        //       {children}
        //     </h3>
        //   ),
        //   heading4: ({ children }) => (
        //     <h4 className="mt-10 mb-4 font-display text-xl tracking-tight text-dark-blue sm:text-2xl">
        //       {children}
        //     </h4>
        //   ),
        //   heading5: ({ children }) => (
        //     <h5 className="mt-10 mb-4 font-display text-lg tracking-tight text-dark-blue sm:text-xl">
        //       {children}
        //     </h5>
        //   ),
        //   heading6: ({ children }) => (
        //     <h6 className="mt-10 mb-4 font-display text-md tracking-tight text-dark-blue sm:text-lg">
        //       {children}
        //     </h6>
        //   ),
        //   paragraph: ({ children }) => (
        //     <p className="mb-4 text-lg tracking-tight text-dark-blue">
        //       {children}
        //     </p>
        //   ),
        //   preformatted: ({ children }) => <> {children} </>,
        //   strong: ({ children }) => <> {children} </>,
        //   em: ({ children }) => <> {children} </>,
        //   listItem: ({ children }) => <> {children} </>,
        //   oListItem: ({ children }) => <> {children} </>,
        //   list: ({ children }) => <> {children} </>,
        //   oList: ({ children }) => <> {children} </>,
        //   // image: ({ node }) =>
        //   //   node.linkTo
        //   //     ? `[![${node.alt}](${node.url})](${node.linkTo.url})\n\n`
        //   //     : `![${node.alt}](${node.url})\n\n`,
        //   // embed: ({ node }) => `${node.oembed.html}\n\n`,
        //   embed: ({ node }) => (
        //     <div
        //       data-oembed={node.oembed.embed_url}
        //       data-oembed-type={node.oembed.type}
        //       data-oembed-provider={node.oembed.provider_name}
        //       // {label(node)}
        //     >
        //       {node.oembed.html}
        //     </div>
        //   ),
        //   hyperlink: ({ children, node }) => (
        //     <PrismicLink
        //       field={node.data}
        //       className="font-semibold text-vibrant-blue hover:text-light-blue"
        //     >
        //       {children}
        //     </PrismicLink>
        //   ),
        //   // span: ({ text }) => (text ? text : ''),
        //   label: ({ node, children }) => {
        //     return (
        //       <>
        //         {node.data.label === "highlight" && (
        //           <span className="relative text-blue-600">{children}</span>
        //         )}
        //         {node.data.label === "inline code" && (
        //           <span className="relative text-blue-600">{children}</span>
        //         )}
        //         {node.data.label === "inline quote" && (
        //           <span className="relative text-blue-600">{children}</span>
        //         )}
        //       </>
        //     );
        //   },
        // }}
      />

    </section>
  );
}
