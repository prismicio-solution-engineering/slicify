import "@/styles/globals.css";
import { PrismicPreview } from "@prismicio/next";
import { PrismicProvider } from "@prismicio/react";
import type { AppProps } from "next/app";
import Link from "next/link";
import { repositoryName } from "@/prismicio";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <PrismicProvider
      internalLinkComponent={({ ...props }) => <Link {...props} />}
    >
      {router.asPath !== "/slice-simulator" ?
        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
        </PrismicPreview>
        :
        <Component {...pageProps} />
      }
    </PrismicProvider>
  );
}
