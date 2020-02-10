<!--
author: RXK
Desc: 登录表单
-->

<template>
    <div>
        <i-form :model="loginForm">
            <form-item prop="username">
            </form-item>
            <form-item prop="password">
            </form-item>
            <form-item></form-item>
        </i-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                loginForm:{
                    username:'',
                    password:''
                }
            }
        }
    }
</script>

<style scoped>

</style>
