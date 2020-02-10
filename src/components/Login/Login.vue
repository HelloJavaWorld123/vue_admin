<!--
author: RXK
Desc: 登录表单
-->

<template>
    <div>
        <h1 class="login-title">登录页面</h1>
        <h1>{{path}}</h1>
        <h1>{{dirName}}</h1>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                path: require('path'),
                dirName: __dirname
            }
        }
    }
</script>

<style scoped>

</style>
