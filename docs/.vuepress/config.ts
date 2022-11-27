import { defineUserConfig } from '@vuepress/cli';
import theme from './theme';

const base = (process.env.BASE as '/' | `/${string}/`) || '/';

export default defineUserConfig({
  base,

  dest: './dist',

  locales: {
    '/': {
      lang: 'es-ES',
      title: 'Supuestamente',
      description: 'cosas que no suelen pasar...',
    },

  },

  theme,

  shouldPrefetch: false,
});


/*

    '/zh/': {
      lang: 'zh-CN',
      title: '主题演示',
      description: 'vuepress-theme-hope 的演示',
    },
    */