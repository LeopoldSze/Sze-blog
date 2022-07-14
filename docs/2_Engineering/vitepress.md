#### 配置

```
// 基础目录结构
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
└─ package.json
```

```js
// .vitepress/config.js
export default {
  title: 'VitePress',
  description: 'Just playing around.'
}
```

<br />

#### 部署

**默认打包位置：**`docs/.vitepress/dist`

```js
// 脚本命令，支持 --port --openx
"scripts": {
    "dev": "vitepress dev docs --port 9000 --open",
    "build": "vitepress build docs",
    "servce": "vitepress serve docs"
  }
```

```shell
# 打包
yarn build

# 本地预览
yarn serve
```

::: warning

:tipping_hand_man:如果网站被部署在子目录，如 (`https://example.com/subdir/`), 那必须设置子目录 `'/subdir/'` 作为  `docs/.vitepress/config.js` 中的 `base` 配置.

:::





