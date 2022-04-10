## 自定义鼠标点击复制事件

```html
<html>
  <body>
    <input id="copyInput" />
    <button class="copy-btn">复制</button>

    <script>
      document
        .querySelector(".copy-btn")
        .addEventListener("click", copyValue("#copyInput"));
      async function copyValue(element) {
        if (navigator.clipboard) {
          // 获取input框
          const Ele = document.querySelector(element);
          //
          try {
            await navigator.clipboard.writeText(Ele.value);
          } catch (error) {
            // 未获得用户许可
            console.error(error);
          }
        } else {
          console.error("当前浏览器不支持此api");
          // 可以使用document.execCommand作为候补方法使用
          Ele.select();
          document.execCommand("copy");
        }
      }
    </script>
  </body>
</html>
```
