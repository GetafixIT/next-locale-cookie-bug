/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ie"],
    defaultLocale: "en",
    domains: [
      {
        domain: "domain.com/en",
        defaultLocale: "en",
      },
      {
        domain: "domain.com/ie",
        defaultLocale: "ie",
      }
    ],
  },
}

module.exports = nextConfig
