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
          <!-- <el-button @click="register">注册</el-button> -->
        </el-form-item>
      </el-form>
    </el-card>
</template>

<script>
import {login} from '@/api/index'

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
      let userInfo = await login(this.form)
      this.$message(userInfo.username + '&&' + userInfo.password)
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
