// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const siteUrl = process.env.SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://waanx.com');
const baseUrl = process.env.BASE_URL || (process.env.VERCEL ? '/' : '/docs/');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Waanx API Documentation',
  tagline: '',
  url: siteUrl,
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  themes: ['docusaurus-theme-openapi-docs'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'waanx-exchange', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-TW'],
    localeConfigs: {
      en: { label: 'English' },
    },
  },
  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          v5_market: {
            specPath: "yml-folder/v5/market.yaml",
            outputDir: "docs/api-explorer/v5/market",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          v5_trade: {
            specPath: "yml-folder/v5/trade.yaml",
            outputDir: "docs/api-explorer/v5/trade",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          v5_account: {
            specPath: "yml-folder/v5/account.yaml",
            outputDir: "docs/api-explorer/v5/account",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          v5_position: {
            specPath: "yml-folder/v5/position.yaml",
            outputDir: "docs/api-explorer/v5/position",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          v5_asset: {
            specPath: "yml-folder/v5/asset.yaml",
            outputDir: "docs/api-explorer/v5/asset",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          v5_user: {
            specPath: "yml-folder/v5/user.yaml",
            outputDir: "docs/api-explorer/v5/user",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          v5_lt: {
            specPath: "yml-folder/v5/lt.yaml",
            outputDir: "docs/api-explorer/v5/lt",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          v5_spot_margin_uta: {
            specPath: "yml-folder/v5/spot-margin-uta.yaml",
            outputDir: "docs/api-explorer/v5/spot-margin-uta",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          v5_spot_margin_normal: {
            specPath: "yml-folder/v5/spot-margin-normal.yaml",
            outputDir: "docs/api-explorer/v5/spot-margin-normal",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
        }
      }
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/waanx.css'),
            require.resolve('./src/css/custom.css'),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: 'offline_oldAPI',
      //   content: 'Waanx has made old versions of the API obsolete. For more information, please refer to our guide to <a target="_blank" rel="noopener noreferrer" href="https://waanx.com/en-US/article/waanx-openapi-services-transition-from-legacy-version-to-new-v5-api-blt25b43a5738c00765/?category=product_updates">transition from the legacy versions to the V5 API</a>.',
      //   backgroundColor: '#20232a',
      //   textColor: '#fff',
      //   isCloseable: false,
      // },
      algolia: {
        appId: '6BDPYQN4N6',
        apiKey: '3945cc0bcfa5510237aa55a2fb83dd20',
        indexName: 'waanx-exchangeio',
        contextualSearch: true,
        externalUrlRegex: 'external\\.com|domain\\.com',
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
        searchParameters: {},
        searchPagePath: 'search',
      },
      colorMode: {
        defaultMode: 'dark',
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: '',
        logo: {
          alt: 'WaanX Logo',
          src: 'assets/logo/horizontal/horizontal_white.svg',
          srcDark: 'assets/logo/horizontal/horizontal_white.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'v5/guide',
            position: 'left',
            label: 'V5 API',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsBefore: [],
            dropdownItemsAfter: [],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php", "http", "json", "n4js", "java"],
      },
    }),
};

module.exports = config;
