# 适用于移动端和PC端的图片裁切插件  

## 使用  
```html
<input type="file" id="File" accept="image/*">
<div id="icw"></div>
<img src="" id="img" alt="">
```
```js
const clipper = new ImageClipper(document.querySelector('#icw'))

clipper.on('change', () => {
    const canvas = clipper.clipper2Canvas()
    document.querySelector('#img').setAttribute('src', canvas.toDataURL())
})
document.querySelector('#File').addEventListener('change', function (e) {
    const file = e.target.files[0]
    clipper.start(file)
})
```

## Options
| 名称                | 必填 | 备注     |
| ------------------- | ---- | -------- |
| el                  | 是   | Node节点 |
| options             | 否   |          |
| options.loadingText |      | 加载文字 |

## on

| 名称   | 必填 | 备注     |
| ------ | ---- | -------- |
| change | 是   | Node节点 |

## Methods

| 名称    |   入参   | 出参                                                         |
| ------- | ---- | ------------------------------------------------------------ |
| clipper2Canvas | 无   | 被裁切部分的canvasElement <br />可以使用 `toDataURL()` `toBlob()`等方法 |
| clipper2File | encoderOptions <br> 压缩质量默认为 1   | 被裁切部分以File类型返回 |
|         |      |                                                              |