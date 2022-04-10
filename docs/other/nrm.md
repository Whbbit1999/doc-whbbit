## nrm 使用

nrm 用来帮助我们将 npm 的源替换为各种镜像。可以省去我们自己更改 npm 配置文件的时间。

### 安装

```bash
npm install -g nrm
```

### 常用示例

#### 查看镜像列表

```bash
nrm ls

  npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
* taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
```

#### 使用镜像

```bash
nrm use taobao


   Registry has been set to: https://registry.npm.taobao.org/
```

---

### 详细使用（官方网址）

[npmjs.com](https://www.npmjs.com/package/nrm)  
[GitHub](https://github.com/Pana/nrm)
