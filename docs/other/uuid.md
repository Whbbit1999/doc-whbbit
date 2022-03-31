> 有时我们需要一个唯一的值，用时间戳也可能会导致重复。这时就可以使用 uuid 这个包来生成一个 uuid 来当作唯一的值

## uuid 简单使用

**安装**

```bash
npm install uuid
```

**创建一个 uuid**

- 使用 `ES6 Module` 引入

```js
import { v4 as uuidv4 } from "uuid";

uuidv4(); // =>"c0fa9840-4fd2-4531-84f1-41359d836087"
```

- 使用 `CommonJS` 引入

```js CommonJS
const { v4: uuidv4 } = require("uuid");

uuidv4(); // =>"c0fa9840-4fd2-4531-84f1-41359d836087"
```

## API Summary

| API              | 描述                                           | 添加版本        | 示例                                   |
| :--------------- | :--------------------------------------------- | :-------------- | :------------------------------------- |
| uuid.NIL         | 一个空的 uuid 字符串 (全都是 0)                | New in uuid@8.3 | "00000000-0000-0000-0000-000000000000" |
| uuid.parse()     | 将 uuid 字符串转化为字节数组                   | New in uuid@8.3 | ｜                                     |
| uuid.stringify() | 将字节数组转换为 uuid 字符串                   | New in uuid@8.3 | ｜                                     |
| uuid.v1()        | 生成一个 1 版本的 uuid（时间戳）               |                 | "bf13fbf0-b10a-11ec-b361-69291658a07d" |
| uuid.v3()        | 生成一个 3 版本的 uuid（namespace w/MD5）      |                 | ｜                                     |
| uuid.v4()        | 生成一个 4 版本的 uuid（随机 random）          |                 | "f046a3a3-5eb2-41d3-9378-1cb28a86bd5e" |
| uuid.v5()        | 生成一个 5 版本的 uuid（namespace w/SHA-1）    |                 | ｜                                     |
| uuid.validate()  | 测试一个字符串是否是一个符合 uuid 规则的字符串 | New in uuid@8.3 | ｜                                     |
| uuid.version()   | 检测 UUID 的 RFC 版本                          | New in uuid@8.3 | ｜                                     |
