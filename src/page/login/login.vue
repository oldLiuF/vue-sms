<!-- 登录 -->
<template>
    <el-card class="container">
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.username" placeholder="帐号"></el-input>
        </el-form-item>
        <el-input v-model="form.password" type="password" placeholder="密码"></el-input>
        <el-form-item class="submit-box">
          <el-button @click="login">登录</el-button>
          <el-button @click="register">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
</template>

<script>
// import { login, accesstoken } from '@/api/user'
import { accesstoken } from '@/api/user'
import Cookies from 'js-cookie'

export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },

  components: {},

  computed: {},

  // mounted: {},

  methods: {
    async login () {
      // let { code, message } = await login(this.form)
      /* let userInfo = await login(this.form)
      // debugger
      if (!userInfo.id) {
        this.$message({
          message: '账号或密码错误',
          type: 'error'
        })
      } else {
        this.$router.push('/')
      } */
      let result = await accesstoken(this.form)
      // debugger
      if (result.success) {
        // debugger
        localStorage.setItem('token', result.token)
        sessionStorage.setItem('token', result.token)
        Cookies.set('token', result.token, { expires: 7 })
        this.$router.push('/')
      } else {
        this.$message({
          message: '账号或密码错误',
          type: 'error'
        })
      }
    },

    register () {
      this.$router.push('register')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  margin: 150px auto 0;
  width: 450px;
  height: 300px;
  .submit-box {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
  }
}
</style>
