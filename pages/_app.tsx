import "@/styles/globals.css";
import { PrismicPreview } from "@prismicio/next";
import { PrismicProvider } from "@prismicio/react";
import type { AppProps } from "next/app";
import Link from "next/link";
import { repositoryName } from "@/prismicio";
import "highlight.js/styles/github-dark.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      internalLinkComponent={({ ...props }) => <Link {...props} />}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
