/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Tribe",
  tagline: "Operating System for Connecting People",
  url: "https://developers.tribe.so",
  baseUrl: "/developers-site/",
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
              label: "Guide",
              to: "/docs/guide/index",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
