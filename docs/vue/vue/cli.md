## 为 `sable-ui` ui 库来生成一个脚手架

<!-- `sable-ui`这个库是自己练习的一个 ui 库 -->

:::info

预期功能

- 可以生成组件

  - 组件目录结构

  ```tree
  <!-- 示例：button组件 -->

  button
  |-- __test__
  |--|-- button.spec.tsx
  |-- src
  |--|-- components
  |--|-- button-types.ts
  |--|-- button.scss
  |--|-- button.tsx / button.vue
  |--|-- useButton.ts
  |-- index.ts
  ```

:::

### 使用的 node 包

- commander
- figlet
- chalk
- fs
- path

### 使用到的 npm 命令

`npm link` / `npm link -f`

> npm link 可以将本地脚手架工具链接到全局去，可以在全局直接使用  
> 如果这个名字被占用的话，可以使用 npm link -f 来强制替换

### 实现命令

> 用来生成 vue 页面

1. create component

如果有 components 文件夹，就在 components 文件夹中添加 xx.vue 文件。如果没有，就创建 components 文件夹后生成 xx.vue 文件

name: xx.vue  
content:  
file: ./components

```ts vue-ts
<script lang="ts" setup>

</script>

<template>

</template>
<script lang="ts">
  export default {
    name: ''
  }
</script>
<style scoped lang="scss">

</style>
```

<!-- 2. create page -->
<!-- 3. create layout -->

前端组件
