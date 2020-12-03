### 1、引入公共样式的方式：
    （1）在入口js文件main.js中引入
    import '../static/css/global.css' /*引入公共样式*/
    （2）在index.html中引入
    <link rel="stylesheet" href="./static/css/global.css"> /*引入公共样式*/
    （3）在app.vue中引入，但是这样引入有一个问题，就是在index.html的HEADH上会多出一个空的<style></style>
    <style>
        @import './../static/css/global.css'; /*引入公共样式*/
    </style>
### 2、引入图片的方式：
    <img :src="imgUrl">
    （1）直接将图片引入为模块 require imgUrl from "../assets/test.png"
    （2）将imgUrl放在数据(data)里  imgUrl:require("../assets/test.png")
    （3）在生命周期函数中设置 
        let urlTemp = "assets/test.png";
        this.imgUrl = require("@/"+urlTemp)




