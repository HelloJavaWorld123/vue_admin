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
    import Login from '@/Login/Login';
    export default {
        name: "login",
        components: {Login},
        data() {
            return {
                coverImage: 'home_1.jpg',
                baseImage: 'home_2.jpg'
            }
        }
    };
</script>

<style lang="less">
    @import "./login.less";
</style>
