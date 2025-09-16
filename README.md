# vitepress-waline-live2d

## 简介

`vitepress-waline-live2d` 是一个基于 `Vitepress` 的主题插件，集成评论[Waline](https://waline.js.org)、[Live2D看板娘](https://www.live2d.com/zh-CHS/)。

[查看 Demo](https://b1.davidingplus.cn/guide/)

## 提示
已支持 `vitepress@2.0.0-alpha.6` 版本。

## 安装

```bash
npm install -D @davidingplus/vitepress-waline-live2d
yarn add -D @davidingplus/vitepress-waline-live2d
pnpm install -D @davidingplus/vitepress-waline-live2d
```

## Waline 用法

`.vitepress/theme/index.js` 文件中使用插件。

1. `serverURL` 替换为自己的地址，更多用法详见[Waline](https://waline.js.org)。

2. 直接复制 vitepressUseRoute 字段下面的写法。目的是将 vitepress 的 useRoute 函数传递给插件内部调用。

```js
import DefaultTheme from 'vitepress/theme'
import { useWaline } from 'vitepress-waline-live2d'
import { useRoute } from 'vitepress'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {},
  setup() {
    useWaline({
      serverURL: 'https://waline.xinlei3166.com',
      vitepressUseRoute: useRoute
    })
  }
}
```

## Live2d 用法

`.vitepress/theme/index.js` 文件中使用插件。vitepressUseRoute 字段的写法同 Waline。

```js
import DefaultTheme from 'vitepress/theme'
import { useLive2d } from 'vitepress-waline-live2d'
import { useRoute } from 'vitepress'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {},
  setup() {
    useLive2d({
      vitepressUseRoute: useRoute
    })
  }
}
```

由于 `live2d.js` 打包后会导致模型显示不全，需要用 cdn 方式引用。

`live2d.js` [下载地址](https://github.com/DavidingPlus/vitepress-waline-live2d/blob/master/docs/public/live2d.js)，下载完成后放在和 `.vitepress` 平级的 `public` 目录中。

`.vitepress/config.js` 文件中增加如下配置：

```js
  head: [
    ['script', { src: '/live2d.js' }],
  ]
```

自定义参数

```js
useLive2d({
  enable: true,
  model: {
    url: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/hibiki/hibiki.model.json'
  },
  display: {
    position: 'right',
    width: '135px',
    height: '300px',
    xOffset: '35px',
    yOffset: '5px'
  },
  mobile: {
    show: true
  },
  react: {
    opacity: 0.8
  }
})
```

### 模型

使用了 [vscode-live2d-models](https://github.com/iCharlesZ/vscode-live2d-models#url) 中的模型，把 `model.url` 改为指定的模型地址即可。


### 感谢

`vitepress-waline-live2d@useLive2d` 参考了 [vuepress-plugin-helper-live2d](https://github.com/JoeyBling/vuepress-plugin-helper-live2d)。

