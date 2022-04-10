## 介绍

Axios 是一个机遇 promise 的网络请求库，用作 node.js 和浏览器中。在服务端它使用 node.js `http` 模块，而在客户端则使用`XMLHttpRequests`。

## 安装

```bash
npm i axios
```

## API

**axios(config)**

```js
axios({
  methods: "post",
  url: "/user/14",
  data: {
    name: "whbbit",
    age: "23",
  },
});
```

包含的请求方式别名

- axios.request(config)
- axios.get(url[,config])
- axios.delete(url[,config])

> 在使用别名方法时，`url`、`method`、`data`这些属性都不必在配置中指定。

## 对 Axios 简易封装
