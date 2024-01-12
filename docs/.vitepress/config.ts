import { defineConfig } from 'vitepress'

const wechatIcon =
  '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1703837111010" class="icon" viewBox="0 0 1170 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4501" xmlns:xlink="http://www.w3.org/1999/xlink" width="228.515625" height="200"><path d="M331.429 263.429q0-23.429-14.286-37.715t-37.714-14.285q-24.572 0-43.429 14.571t-18.857 37.429q0 22.285 18.857 36.857t43.429 14.571q23.428 0 37.714-14t14.286-37.428zM756 553.143q0-16-14.571-28.572T704 512q-15.429 0-28.286 12.857t-12.857 28.286q0 16 12.857 28.857T704 594.857q22.857 0 37.429-12.571T756 553.143zM621.143 263.429q0-23.429-14-37.715t-37.429-14.285q-24.571 0-43.428 14.571t-18.857 37.429q0 22.285 18.857 36.857t43.428 14.571q23.429 0 37.429-14t14-37.428zM984 553.143q0-16-14.857-28.572T932 512q-15.429 0-28.286 12.857t-12.857 28.286q0 16 12.857 28.857T932 594.857q22.286 0 37.143-12.571T984 553.143zM832 326.286Q814.286 324 792 324q-96.571 0-177.714 44T486.57 487.143 440 651.429q0 44.571 13.143 86.857-20 1.714-38.857 1.714-14.857 0-28.572-0.857t-31.428-3.714-25.429-4-31.143-6-28.571-6L124.57 792l41.143-124.571Q0 551.429 0 387.429q0-96.572 55.714-177.715T206.571 82t207.715-46.571q100.571 0 190 37.714T754 177.429t78 148.857z m338.286 320.571q0 66.857-39.143 127.714t-106 110.572l31.428 103.428-113.714-62.285q-85.714 21.143-124.571 21.143-96.572 0-177.715-40.286T512.857 797.714t-46.571-150.857T512.857 496t127.714-109.429 177.715-40.285q92 0 173.143 40.285t130 109.715 48.857 150.571z" fill="#28BE2C" p-id="4502"></path></svg>'

/**
 * nav配置
 */
function getNavConfig() {
  return [
    { text: '规范指南', link: '/1-FrontEnd/other/skill' },
    {
      text: '测试菜单',
      items: [
        { text: 'A', link: '/a' },
        {
          text: 'B',
          items: [
            { text: 'B1', link: '/b/1' },
            { text: 'B2', link: '/b/2' }
          ]
        }
      ]
    }
  ]
}

/**
 * sidebar配置
 */
function getSidebar() {
  return [
    {
      text: 'HTML',
      collapsed: true,
      base: '/1-FrontEnd/html',
      items: [
        { text: 'HTML5', link: '/html5.md' },
        { text: 'IndexedDB', link: '/indexedDB.md' },
        { text: 'Web Worker', link: '/webworker.md' }
      ]
    },
    {
      text: 'CSS',
      collapsed: true,
      base: '/1-FrontEnd/css',
      items: [
        { text: '选择器', link: '/selector' },
        { text: 'Less', link: '/less' }
      ]
    },
    {
      text: 'JavaScript',
      collapsed: true,
      base: '/1-FrontEnd/javascript',
      items: [
        { text: '基础', link: '/base' },
        { text: '模块化', link: '/module' },
        { text: 'Promise', link: '/promise' },
        { text: '设计模式', link: '/设计模式' }
      ]
    },
    {
      text: 'Vue',
      collapsed: true,
      base: '/1-FrontEnd/vue',
      items: [
        { text: '简介', link: '/1-introduction' },
        { text: '应用创建', link: '/2-application' },
        { text: '模板语法', link: '/3-template' },
        { text: '响应式', link: '/4-reactivity' },
        { text: '计算属性', link: '/5-computed' },
        { text: '类与样式绑定', link: '/6-class-and-style' },
        { text: '渲染', link: '/7-render' },
        { text: '事件处理及表单', link: '/8-event-handling' },
        { text: '生命周期钩子', link: '/9-lifecycle' },
        { text: '侦听器和模板引用', link: '/10-watchers-and-refs' },
        { text: '组件', link: '/11-component' },
        { text: '逻辑复用和自定义指令', link: '/12-logic-reuse' },
        { text: '内置组件', link: '/13-inside-components' },
        { text: '搭配ts', link: '/13-vue-and-ts' },
        { text: 'API', link: '/14-global-api' },
        { text: '性能优化', link: '/15-performance' },
        { text: '工程化配置', link: '/16-engineering' },
        { text: 'vue-router', link: '/20-router' },
        { text: 'Pinia', link: '/pinia' },
        { text: 'Vue CLI 项目构建', link: '/vue-cli' }
      ]
    },
    {
      text: 'TypeScript',
      collapsed: true,
      items: [
        { text: '基础', link: '/TypeScript/1-basic' },
        { text: 'tsconfig', link: '/TypeScript/2-tsconfig' },
        { text: '声明文件', link: '/TypeScript/3-declaration-files' }
      ]
    },
    {
      text: '工程化',
      collapsed: true,
      items: [{ text: 'Browserslist', link: '/2_Engineering/1-browserslist' }]
    },
    {
      text: '后端',
      collapsed: true,
      base: '/2-BackEnd',
      items: [
        {
          text: 'NestJS',
          link: '/nestjs'
        },
        {
          text: 'PM2',
          link: '/pm2'
        }
      ]
    },
    {
      text: '运维',
      collapsed: true,
      base: '/3-DevOps',
      items: [
        {
          text: 'Linux',
          link: '/linux'
        },
        {
          text: 'Linux2',
          link: '/linux-origin'
        },
        {
          text: 'Linux软件安装',
          link: '/linux-app-install'
        }
      ]
    },
    {
      text: '工具',
      collapsed: true,
      base: '/4-Tools',
      items: [
        {
          text: 'WebStorm',
          link: '/webstorm'
        },
        {
          text: 'Markdown',
          link: '/markdown'
        },
        {
          text: 'Cmder',
          link: '/cmder'
        }
      ]
    }
  ]
}

export default defineConfig({
  title: 'Leopold-Sze',
  description: 'Leopold-Sze的个人博客',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      }
    ],
    [
      'meta',
      {
        name: 'keywords',
        content: 'Leopold-Sze VitePress Leopold Sze Blog'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        size: '180x180',
        href: '/apple-touch-icon.png'
      }
    ],
    [
      'link',
      {
        rel: 'shortcut icon',
        type: 'image/png',
        size: '32x32',
        href: '/favicon-32x32.png'
      }
    ],
    [
      'link',
      {
        rel: 'shortcut icon',
        type: 'image/png',
        size: '32x32',
        href: '/favicon-16x16.png'
      }
    ],
    [
      'link',
      {
        rel: 'shortcut icon',
        href: '/favicon.ico'
      }
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColo',
        content: '#da532c'
      }
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#ffffff'
      }
    ]
    // ['link', { rel: 'stylesheet', href: 'https://unpkg.com/gitalk/dist/gitalk.css' }],
    // ['script', { src: 'https://unpkg.com/gitalk/dist/gitalk.min.js' }]
  ],
  base: '/repo/',
  srcDir: 'src',
  srcExclude: ['**/README.md', '**/TODO.md'],
  lang: 'zh-CN',
  lastUpdated: true,
  markdown: {
    lineNumbers: true, // 启用代码行号
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },
  themeConfig: {
    nav: getNavConfig(),
    sidebarMenuLabel: '目录',
    sidebar: getSidebar(),
    logo: {
      light: '/assets/main.jpg',
      dark: '/assets/main.jpg',
      alt: 'logo'
    },
    outline: {
      /**
       * 大纲标题
       */
      label: '本页目录',
      /**
       * 识别<h2>-<h4>的标题
       */
      level: [2, 5]
    },
    search: {
      provider: 'local'
    },
    darkModeSwitchLabel: '暗黑模式',
    langMenuLabel: '切换语言',
    externalLinkIcon: true,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://LeopoldSze.github.io/vitepress-blog'
      },
      {
        icon: {
          svg: wechatIcon
        },
        link: 'https://LeopoldSze.github.io/vitepress-blog'
      }
    ],
    lastUpdated: {
      text: '上次更新'
    },
    returnToTopLabel: '返回顶部',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    footer: {
      message: '醉后不知天在水，满船清梦压星河',
      copyright: `Copyright © 2023 Leopold-Sze`
    },
    notFound: {
      title: '页面不见啦~',
      quote: '久等百里蒹葭，伊人入画',
      linkLabel: '回首页吧',
      linkText: '返回首页'
    }
  }
})
