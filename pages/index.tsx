import Head from "next/head";
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices/marketing";
import { getLanguages } from "@/utils/getLanguages";
import MarketingLayout from "@/components/MarketingLayout";
import { getShowcaseWebsites } from "@/utils/getShowcaseWebsites";
import { fetchJobOpenings } from "@/utils/getJobList";

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({
  page,
  header,
  footer,
  languages,
  showcaseWebsites,
  jobOpenings,
}: HomePageProps) {
  return (
    <>
      <Head>
        <title>{page.data.meta_title || "Slicify | Home"}</title>
        <meta
          name="description"
          content={page.data.meta_title || "Slicify, slices for everyone."}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MarketingLayout
        header={header.data}
        footer={footer.data}
        languages={languages}
      >
        <SliceZone slices={page.data.slices} components={components} context={{showcaseWebsites, jobOpenings}} />
      </MarketingLayout>
    </>
  );
}

export async function getStaticProps({
  locales,
  locale,
  previewData,
}: GetStaticPropsContext) {
  const client = createClient({ previewData });
  //    ^ Automatically contains references to document types

  const [page,header,footer] = await Promise.all([
    client.getSingle<Content.HomePageDocument>("home_page", {
      lang: locale,
    }),
    client.getSingle<Content.HeaderDocument>("header", {
      lang: locale,
    }),
    client.getSingle<Content.FooterDocument>("footer", {
      lang: locale,
    })
  ])

  const languages = await getLanguages(page, client, locales);

  const showcaseWebsites = await getShowcaseWebsites(3);

  const hasJobListSlice = await (page?.data?.slices?.filter(slice => slice.slice_type === "job_list"));

  const jobOpenings = hasJobListSlice && await fetchJobOpenings();


  return {
    props: {
      page,
      header,
      footer,
      languages,
      showcaseWebsites,
      jobOpenings,
    },
    revalidate: 60,
  };
}
