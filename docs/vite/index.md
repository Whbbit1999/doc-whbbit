# [vite](https://vitejs.dev/) 配置及插件

## vite 初始化项目

> 注意 node 版本需大于等于 12.x 版本

- 按提示创建项目

```shell
# npm
npm create vite@latest

# yarn
yarn create vite

# pnpm
pnpm create vite
```

- 根据模版创建项目

```shell
# npm 6.x
npm create vite@latest --template vue-ts

# npm 7.x
npm create vite@latest -- --template vue-ts

# yarn
yarn create vite --template vue-ts

# pnpm
pnpm create vite -- --template vue-ts
```

[官方模版](https://github.com/vitejs/vite/tree/main/packages/create-vite)有：`vanilla`，`vanilla-ts`，`vue`，`vue-ts`，`react`，`react-ts`，`preact`，`preact-ts`，`lit`，`lit-ts`，`svelte`，`svelte-ts`。

[社区模版](https://github.com/vitejs/awesome-vite#templates)

## 插件

### 添加插件

若要使用一个插件，需要将它添加到 `devDependencies`（也就是开发者依赖中）， 并且在 `vite.config.ts` 配置文件中的 `plugins` 数组中引入。

## 常用插件及配置

### 别名配置

先安装类型申明

```bash
yarn add -D @types/node
```

将 `@` 指向 `src` 目录

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
```
