## 媒体标签

### 图片 img

`<img />` 标签将一份图片插入到文档中

```html
<img src="" alt="" />
```

#### 常用属性

常用属性是以下两个：

- src 属性是必须的，表示图片所在的地址(文件路径)
- alt 属性不是必须的，但是如果你想提高网站的可访问性的话，它是必须的。它会在 src 访问不到时显示于页面中，屏幕阅读器也会将其中的内容阅读给读者。

它也有一些其他的属性：

- width 表示图片的宽度，在 html5 中单位是像素
- height 表示图片的高度，在 html5 中单位是像素

#### 支持的图片格式

> 兼容性可以到 [Can I USE](https://caniuse.com/) 去查询

| 缩写 |         描述         |   MIME 类型   |             文件拓展名              |
| :--: | :------------------: | :-----------: | :---------------------------------: |
| ICO  |       微软图标       | image/x-icon  |             .ico / .cur             |
| GIF  |         动图         |   image/gif   |                .gif                 |
| PNG  |    带透明通道图片    |   image/png   |                .png                 |
| JPEG | 联合影像专家小组图像 |  image/jpeg   | .jpg / .jpeg / .pjp / .pjpeg /.jfif |
| WebP |    万维网图像格式    |  image/webp   |                .webp                |
| SVG  |    可缩放矢量图形    | image/svg+xml |                .svg                 |
| APNG |  动态便携式网路图像  |  image/apng   |                .apng                |
| AVIF |   AV1 图像文件格式   |  image/avif   |                .avif                |
| BMP  |       位图文件       |   image/bmp   |                .bmp                 |
| TIFF |   标签图像文件格式   |  image/tiff   |            .tif / .tiff             |

### 音频 audio

`<audio />` 标签将一份图片插入到文档中

### 视频 video

`<video />` 标签将一份图片插入到文档中
