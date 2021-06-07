/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Tribe Developers",
  tagline: "Operating System for Connecting People",
  url: "https://developers.tribe.so",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "./img/favicon-32x32.png",
  organizationName: "tribeplatform",
  projectName: "developers-site",
  themeConfig: {
    navbar: {
      logo: {
        alt: "Tribe Logo",
        src: "./img/logo.svg",
      },
      items: [
        {
          docId: "index",
          to: "/",
          activeBaseRegex: "^/$",
          position: "left",
          label: "Home",
        },
        {
          type: "doc",
          docId: "guide/index",
          position: "left",
          label: "Guide",
        },
        {
          type: "doc",
          docId: "graphql/schema",
          position: "left",
          label: "GraphQL",
        },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Home",
              to: "/",
            },
            {
              label: "Guide",
              to: "/docs/guide/index",
            },
            {
              label: "GraphQL",
              to: "/docs/graphql/schema",
            },
          ],
        },
        {
          title: "Follow Us",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com/tribeplatform/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/tribeplatform",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/tribeplatform/",
            },
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/company/18796857",
            },
            {
              label: "Spotify",
              href: "https://open.spotify.com/playlist/2FbGMDrfzW7xzNwomj5cUb",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Community",
              href: "https://community.tribe.so/",
            },
            {
              label: "Customers",
              href: "https://tribe.so/customers",
            },
            {
              label: "Books",
              href: "https://tribe.so/books",
            },
            {
              label: "Blog",
              href: "https://tribe.so/blog",
            },
            {
              label: "System Status",
              href: "https://status.tribe.so/",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Pricing",
              href: "https://tribe.so/pricing",
            },
            {
              label: "Careers",
              href: "https://tribe.so/careers",
            },
            {
              label: "Press Resources",
              href: "https://tribe.so/press",
            },
            {
              label: "Affiliate Program",
              href: "https://tribe.so/referral",
            },
            {
              label: "Terms of Service",
              href: "https://tribe.so/terms-of-service",
            },
            {
              label: "Privacy Policy",
              href: "https://tribe.so/privacy-policy",
            },
          ],
        },
      ],
      copyright: `Made on 🌏planet earth. © ${new Date().getFullYear()}  Tribe Technologies Inc.`,
    },
  },
  plugins: [
    [
      require.resolve("@edno/docusaurus2-graphql-doc-generator"),
      {
        schema: "https://app.tribe.so/graphql",
        rootPath: "./docs", // docs will be generated under './docs/graphql' (rootPath/baseURL)
        baseURL: "graphql",
        homepage: "./docs/schema.md",
        linkRoot: "/docs",
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/tribeplatform/developers-site/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
