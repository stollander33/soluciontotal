import { hopeTheme } from 'vuepress-theme-hope';
import * as navbar from './navbar';
import * as sidebar from './sidebar';

const hostname =
  process.env.HOSTNAME || 'https://supuestamente.es';

export default hopeTheme({
  hostname,

  author: {
    name: 'Stollander',
    url: 'https://supuestamente.es',
  },

  iconAssets: '//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css',

  logo: '/logo.gif',

  repo: 'stollander33/soluciontotal',

  docsDir: 'demo/src',

  pageInfo: ['Original',  'Category', 'Tag'],

  blog: {
    medias: {      
    },
  },

  locales: {
    '/': {
      // navbar
      navbar: navbar.es,

      // sidebar
      sidebar: sidebar.es,

      footer: 'SoluciónTotal',

      displayFooter: false,

      blog: {
        description: 'Curso Seguridad Total',
        intro: '/intro.html',
      },

      metaLocales: {
        editLink: 'Editar esta página en GitHub',
      },
    },

  },

  encrypt: {
    config: {
      '/guide/encrypt.html': ['1234'],
      '/zh/guide/encrypt.html': ['1234'],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },
    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: 'Giscus',
      repo: 'vuepress-theme-hope/giscus-discussions',
      repoId: 'R_kgDOG_Pt2A',
      category: 'Announcements',
      categoryId: 'DIC_kwDOG_Pt2M4COD69',

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
    },

    pwa: {
      favicon: '/favicon.ico',
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: '/assets/icon/apple-icon-152.png',
        statusBarColor: 'black',
      },
      msTile: {
        image: '/assets/icon/ms-icon-144.png',
        color: '#ffffff',
      },
      manifest: {
        icons: [
          {
            src: '/assets/icon/chrome-mask-512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-mask-192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        shortcuts: [
          {
            name: 'Guide',
            short_name: 'Guide',
            url: '/guide/',
            icons: [
              {
                src: '/assets/icon/guide-maskable.png',
                sizes: '192x192',
                purpose: 'maskable',
                type: 'image/png',
              },
              {
                src: '/assets/icon/guide-monochrome.png',
                sizes: '192x192',
                purpose: 'monochrome',
                type: 'image/png',
              },
            ],
          },
        ],
      },
    },

    seo: {
      canonical:
        hostname === 'https://supuestamente.es'
          ? null
          : 'https://supuestamente.es/',
    },
  },
});
