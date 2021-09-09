# Soft UI

## 快速上手

### 使用 @vue/cli3 及以上版本

```JavaScript
import vue from 'vue'
import liftEffect from '~/packages/components/LiftEffect'

const app = vue.createApp({})
app.use(liftEffect)
```

### 使用 Vite SSG

```JavaScript
import { ViteSSG } from 'vite-ssg'
import liftEffect from '~/packages/components/LiftEffect'

import App from './App.vue'


export const createApp = ViteSSG(
  App,
  {},
  (ctx) => {
    ctx.app.use(liftEffect) // 安装 vue 插件到 vue 实例
  },
)
```

## 开发环境

准备开发环境，安装依赖

```shell
$ pnpm i
```

打开开发服务器

```shell
$ pnpm dev
```

## 文件结构
```shell
.
├── LICENSE # 证书文件
├── README.md # README
├── index.html # Vite 配置的默认 index.html 文件
├── locales # 多语言（仅用于展示网页）
│   ├── en.yml
│   └── zh-CN.yml
├── netlify.toml # netlify 配置文件
├── node_modules # node_modules 文件 
├── package.json # 项目信息和依赖
├── packages # 打包时打包的目录
│   └── components # UI 组件
├── pnpm-lock.yaml # pnpm 版本锁文件
├── public # 资产文件，图片、静态文件等（仅用于展示网页）
├── src # 展示网页源代码
│   ├── App.vue # 根 vue 组件
│   ├── components # 展示网页使用的组件
│   ├── layouts # 展示网页使用的排版
│   ├── logic # 暗色模式切换
│   ├── main.ts # 主要入口
│   ├── modules # 模块，插件配置
│   ├── pages # 展示网站的页面（基于文件系统的路由）
│   ├── shims.d.ts
│   ├── stores # Pinia 状态
│   ├── styles # 样式文件
│   └── types.ts # 类型文件
├── tsconfig.json # TypeScript 配置文件
├── vite.config.ts # Vite 配置文件
└── windi.config.ts # Windi CSS 配置文件
```
