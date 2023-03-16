// @ts-check
const path = require('path')
const beian = '京ICP'

const announcementBarContent = `关于 <a href='https://github.com/ysicing/spot' target='_blank'>新轮子 竞价机器助手</a>`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '缘生笔记',
  titleDelimiter: '-',
  url: 'https://wiki.ysicing.me',
  baseUrl: '/',
  favicon: 'https://github.com/ysicing.png',
  organizationName: 'ysicing',
  projectName: 'docusaurus',
  tagline: '新时代云缘生农民工',
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    image: 'img/logo.png',
    announcementBar: {
      id: 'announcementBar-3',
      content: announcementBarContent,
    },
    metadata: [
      {
        name: 'keywords',
        content:'缘生'
      },
      {
        name: 'keywords',
        content: 'blog, ysicing, kubernetes, docker, javascript, typescript, react, vue, web, 前端, 后端, 云原生,容器',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      }
    },
    navbar: {
      title: '云缘生',
      hideOnScroll: true,
      logo: {
        alt: '云缘生',
        src: 'https://github.com/ysicing.png',
        srcDark: 'https://github.com/ysicing.png',
      },
      items: [
        {
          label: '标签',
          position: 'left',
          to: 'tags',
        },
        {
          label: '归档',
          position: 'left',
          to: 'archive',
        },
        {
          label: '导航',
          position: 'right',
          to: 'website',
        },
        {
          label: '项目',
          position: 'right',
          to: 'project',
        },
        {
          label: '实验室',
          position: 'right',
          items: [
            {
              label: 'IP查询',
              to: "https://ip.ysicing.cloud"
            },
            {
              label: '镜像站',
              to: "https://mirrors.ysicing.cloud"
            },
            {
              label: '金榜题名',
              to: "sponsor"
            },
            {
              label: '状态页',
              to: "https://status.ysicing.cloud/"
            },
            {
              label: '小声哔哔',
              to: "https://note.ysicing.cloud/explore"
            }
          ]
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '标签',
              to: 'tags',
            },
            {
              label: '归档',
              to: 'archive',
            },
            {
              label: '实战项目',
              to: 'project',
            },
          ],
        },
        {
          title: '站点',
          items: [
            {
              label: '关于',
              to: '/about',
            },
            {
              label: '日志',
              to: '/site',
            },
            {
              label: '打赏赞助',
              to: '/sponsor',
            },
          ],
        },
        {
          title: '其他',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ysicing',
            },
            {
              label: '友情链接',
              to: '/friends',
            },
          {
            html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`
          },
        ],
        },
      ],
      copyright: `<p><a href="https://icp.gov.moe/?keyword=20212380" class="footer_lin">萌ICP备20212380号</a></p><p><a href="http://beian.miit.gov.cn/" >${beian}</a></p><p>Copyright © 2013 – ${new Date().getFullYear()} ysicing. </p>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['bash', 'docker', 'yaml', 'json','markdown','python', 'javascript', 'typescript', 'php', 'rust'],
      defaultLanguage: 'go',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {}
    },
    giscus: {
      repo: 'ysicing/devops-handbook',
      repoId: 'MDEwOlJlcG9zaXRvcnkyMjY2ODA1NjU=',
      category: 'Announcements',
      categoryId: 'DIC_kwDODYLe9c4CU3Sp',
      theme: 'light',
      darkTheme: 'dark',
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {
      github: 'https://github.com/ysicing',
      telegram: 'https://t.me/ysicing',
      wx: 'https://s4.ysicing.cloud/ysicing.jpeg',
    },
  }),
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: '缘生(ysicing)的个人博客',
      },
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: false,
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      }),
    ],
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en','zh'],
        indexPages: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blog',
        docsDir: './docs',
        blogDir: './blog',
      },
    ],
  ],
  plugins: [
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'), {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/ysicing/devops-handbook/edit/master/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: '缘生(ysicing)的个人博客',
        blogSidebarTitle: '近期文章',
        blogSidebarCount: 10,
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: 'ysicing',
          copyright: `Copyright © ${new Date().getFullYear()} ysicing Built with Docusaurus.<p><a href="https://icp.gov.moe/?keyword=20212380" class="footer_lin">萌ICP备20212380号</a></p><p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
      }
    ],
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-ideal-image', {
        disableInDev: false,
      }
    ],
    ['@dipakparmar/docusaurus-plugin-umami', {
      // options
      websiteID: "your-website-id", // Required
      analyticsDomain: "umami.external.ysicing.net", // Required
      scriptName: "",
      dataHostURL: "",
      dataAutoTrack: true,
      dataDoNoTrack: true,
      dataCache: true,
      dataDomains: "", // comma separated list of domains, *Recommended*
    }],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51 139 255)',
          },
        ],
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.staticfile.org/lxgw-wenkai-webfont/1.7.0/style.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': {
        htmlLang: 'zh-CN'
      },
    },
  },
}

module.exports = config
