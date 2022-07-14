import { defineConfig } from "vitepress"

// 侧边栏配置
function getSidebar () {
  return {
    "/": [
      {
        text: "前端",
        children: [{
          text: "Pinia",
          link: "/1_FrontEnd/pinia"
        }]
      },
      {
        text: '工具',
        children: [
          {
            text: 'vitepress',
            link: '/2_Engineering/vitepress'
          }
        ]
      }
    ]
  }
}

export default defineConfig({
  base: "/",
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      }
    ],
    ["meta", { name: "keywords", content: "Leopold-Sze VitePress" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  title: "Leopold-Sze",
  description: "A Blog Powered By VitePress",
  themeConfig: {
    nav: [
      {text: "首页", link: "/home"},
      {text: "归档", link: "/docs"},
      {text: "分类", link: "/tags"},
    ],
    sidebar: getSidebar()
  }
})
