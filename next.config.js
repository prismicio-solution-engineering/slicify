const prismic = require("@prismicio/client");
const sm = require("./slicemachine.config.json");

/** @type {import('next').NextConfig} */

const nextConfig = async () => {
  const client = prismic.createClient(process.env.NEXT_PUBLIC_PRISMIC_REPO
    ? process.env.NEXT_PUBLIC_PRISMIC_REPO
    : sm.apiEndpoint);

  const repository = await client.getRepository();
  const locales = repository.languages.map((lang) => lang.id);

  return {
    reactStrictMode: true,
    i18n: {
      locales,
      defaultLocale: locales[0],
      localeDetection: false,
    },
    images: {
      loader: "imgix",
      path: "https://images.prismic.io/",
    },
  };
};

module.exports = nextConfig;
