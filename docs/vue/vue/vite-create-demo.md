## 使用 vite 创建 vue-ts 项目

```bash
yarn create vite project-name --template vue-ts
```

## 问题

1. 什么情况下使用函数式组件？

> 组件逻辑非常简单（无状态组件）时，可以使用函数式组件。如果需要定制很多属性或者逻辑非常复杂时，使用函数式组件就显得不够用了。

2. tsx 文件怎么编写？

```ts
import { SetupContext } from "vue";

type myProps = {
  hello: string;
};
const HelloWorld = (props: myProps, context: SetupContext) => {
  return <div>Hello World</div>;
};

export default HelloWorld;

// 或者也可以像下面一样来编写

defineComponent({
  render() {
    return <div>Hello World</div>;
  },
});
// 或者也可以使用下面的这种方式
defineComponent({
  //这里可以写很多配置项
  name: "",
  props: "",
  emits: [],
  setup(props, context) {
    //逻辑代码
    。。。
    // jsx
    return () => {
      return <div>Hello World</div>;
    };
  },
});
```
