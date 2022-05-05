# 小程序

## 小程序配置地址跳转至小程序指定界面

> 示例小程序使用 uni-app 进行开发

### 微信公众平台配置

二维码规则：http://wechat.whbbit.cn/invoice-header

二维码规则配置到标志这一段就可，比方说你要根据`http://wechat.whbbit.cn/invoice-header?jqbh=499000169936&jezt=1`跳转到小程序的指定界面那么二维码规则只需要写到`http://wechat.whbbit.cn/invoice-header`即可。`?`后面的需要开发者自己定义顺序或者使用下面这种方式来获取链接中动态参数的值

### 程序中获取参数

我们可以在 `onLoad`生命周期中获取到链接

```js
async onLoad(query) {
  const q = decodeURIComponent(query.q)
}
```

我们可以自定义一个工具函数来获取路径中的动态参数

```js
// 获取URL参数
export function getUrlParams(url) {
  const map = new Map();
  const params = url.split("?")[1];
  if (!params) {
    return map;
  }
  const _params = params.split("&");
  if (Array.isArray(_params)) {
    _params.forEach((item) => {
      map.set(item.split("=")[0], item.split("=")[1]);
    });
  } else {
    map.set(_params.split("=")[0], _params.split("=")[1]);
  }
  return map;
}
```

而后引入，并进行取值

```js
import { getUrlParams } from "./utils/getParams";
async onLoad(query) {
  const q = decodeURIComponent(query.q)
  const params = getUrlParams(q)

  // 取对应的参数
  if(params.get('jqbh')) {
    const jqbh = params.get('jqbh')
  }

}
```
