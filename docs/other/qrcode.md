---
title: qrcode使用
---

## qrcode 使用及注意事项

1. 引入 qrcode 包

```js
<script src="https://cdn.staticfile.org/qrcodejs/1.0.0/qrcode.min.js"></script>
```

2. 页面上创建一容器用来方式生成的二维码

```html
<div id="qrcode"></div>
```

3. script 标签里做操作

```js
const qrcodeurl = "www.whbbit.cn";

const qrcode = new QRCode("qrcode", {
  text: qrcodeurl,
  width: 200,
  height: 200,
  correctLevel: QRCode.CorrectLevel.H,
});
```

这样就可以在页面上生成二维码了。但是有一些问题：

::: tip

1. 在部分手机上生成不了二维码
2. 手机上无法进行长按识别

:::

#### 手机上生成不了二维码的解决方式

可以使用一个定时器将事件延期执行

```js
setTimeout(() => {
  if (!document.querySelector("#qrcode img").src) {
    const canvas = document.querySelector("#qrcode canvas")[0];
    const dataUrl = canvas.toDataUrl("image/png");
    document.querySelector("#qrcode img").src = dataUrl;
  }
}, 300);
```

#### 手机上无法长按识别的解决方式

qrcode 生成二维码是使用 canvas 生成的，可以将 canvas 中的内容提取到自定义的 img 标签中

```html
<div id="qrcode"></div>
<img class="qrcode-img" />
```

```js
setTimeout(() => {
  const img = document.querySelector("#qrcode img");
  document.querySelector("#qrcode").style.display = "none";
  if (!img.src) {
    const canvas = document.querySelector("#qrcode canvas")[0];
    const dataUrl = canvas.toDataUrl("image/png");
    document.querySelector(".qrcode-img").src = dataUrl;
  } else {
    document.querySelector(".qrcode-img").src = img.src;
  }
}, 300);
```

## 使用 es6 格式生成二维码

### 安装

```bash
yarn add qrcode
```
