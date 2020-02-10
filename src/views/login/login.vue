<!--
author: RXK
Desc: 首页登录页面
-->

<template>
    <div>
        <div class="login"
             :style="{'backgroundImage': 'url('+require('../../assets/img/home/'+(coverImage ? coverImage : baseImage))+')'}">
            <Login></Login>
        </div>
    </div>
</template>

<script>
    /*导入自定义组件
    * 1. import
    * 2. export components
    * 3. 必须用大括号*/
    import Login from "@/Login/Login";
    export default {
        name: "login",
        /*导入自定义组件*/
        components: {Login},
        data() {
            return {
                /*后台获取背景图片 进行自动填充*/
                coverImage: 'home_1.jpg',
                baseImage: 'home_2.jpg'
            }
        }
    };
</script>

<style lang="less">
    @import "./login.less";
</style>
