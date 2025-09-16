## [1.1.0](https://github.com/DavidingPlus/vitepress-waline-live2d/pull/1) (2025-09-14)

在通过 `npm` 或 `pnpm` 安装原插件后，如果直接对网站进行打包，可能会遇两类常见错误：

---

### 1️⃣ 打包工具相关的错误

具体可参考 [https://github.com/xinlei3166/vitepress-theme-website/issues/3](https://github.com/xinlei3166/vitepress-theme-website/issues/3)，常见表现：

- Vue 文件解析错误。
- CSS 导入错误。

**原因**：  
原插件的打包方式不兼容 VitePress 生产环境，Vue 文件和 CSS 没有正确打包进 JS。

**解决方案**：

- 将打包工具从 `unbuild` 换成 `vite`。
- 配置将 CSS 和 Vue 文件内容全部打包进 JS 中。

这样可以保证插件在使用时不会出现 Vue 文件或 CSS 找不到的问题。

---

### 2️⃣ VitePress 运行时 API `useRoute` 的错误

如果插件内部直接 import `useRoute`，会报如下错误：

```sh
The requested module 'vitepress' does not provide an export named 'useRoute'
```

**原因**： 
useRoute 仅在 VitePress 环境下可用，插件打包后脱离 VitePress 环境，所以找不到该函数。

**解决方案**：

- 不在插件内部直接调用 useRoute。
- 改为 将 useRoute 函数作为插件入口函数的参数，由使用插件的项目传入。
- 这样插件在任何环境下都可以安全使用，避免打包报错。



## [1.0.8](https://github.com/xinlei3166/vitepress-theme-website/compare/v1.0.7...v1.0.8) (2024-04-03)



## [1.0.7](https://github.com/xinlei3166/vitepress-theme-website/compare/v1.0.6...v1.0.7) (2024-04-03)


### Bug Fixes

* 修复 live2d 打包后模型显示不全问题； ([ae8297e](https://github.com/xinlei3166/vitepress-theme-website/commit/ae8297eaa115519cf2eb00bc26278568e5e1a8f4))



## [1.0.6](https://github.com/xinlei3166/vitepress-theme-website/compare/v1.0.5...v1.0.6) (2023-08-01)


### Features

* optimized code ([b13cfa1](https://github.com/xinlei3166/vitepress-theme-website/commit/b13cfa1fea29a506cbd5bbdd1cd3280f3872bfc5))



## [1.0.5](https://github.com/xinlei3166/vitepress-theme-website/compare/v1.0.4...v1.0.5) (2023-05-19)



## [1.0.4](https://github.com/xinlei3166/vitepress-theme-website/compare/v1.0.3...v1.0.4) (2023-05-17)



## [1.0.3](https://github.com/xinlei3166/vitepress-theme-website/compare/v1.0.2...v1.0.3) (2023-05-17)



## [1.0.2](https://github.com/xinlei3166/vitepress-theme-website/compare/v1.0.1...v1.0.2) (2023-05-17)



## 1.0.1 (2023-05-17)



