## umi 使用 ant design pro 后白屏时间太长

- 出现原因：打包后的 index.htlm 文件中出现`<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js"></script>`导致

- [解决地址](https://github.com/umijs/umi/issues/1545)

## vue-router 传参 params 为空

使用 vue-router 传参时，使用 path 时，params 会无效，可以将 params 改为 query 或者将 path 更改为 name

```js
import { useRouter } from "vue-router";
const router = useRouter();
router.push({
  name: "",
  params: {},
  s,
});
// 或者
router.path({
  path: "",
  query: {},
});
```
