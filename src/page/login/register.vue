<!-- 登录 -->
<template>
    <el-card class="container">
      <el-form ref="form" :model="form" :rules="validRegister">
        <el-form-item prop="username">
          <el-input v-model="form.username" auto-complete="off" placeholder="帐号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" placeholder="密码"></el-input>
        </el-form-item>
         <el-form-item prop="rePassword">
          <el-input v-model="form.rePassword" type="password" placeholder="确认密码"></el-input>
         </el-form-item>
        <el-form-item class="submit-box">
          <el-button @click="register('form')">注册</el-button>
          <el-button @click="backToLogin">返回登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
</template>

<script>
import { register } from '@/api/user'

export default {
  data () {
    let checkUsername = (rule, value, next) => {
      if (value === '') {
        next(new Error('请输入帐号'))
      } else {
        next()
      }
    }

    let checkPassword = (rule, value, next) => {
      if (value === '') {
        next(new Error('请输入密码'))
      } else {
        if (this.form.rePassword !== '') {
          this.$refs.form.validateField('rePassword')
        }
        next()
      }
    }

    let checkRePassword = (rule, value, next) => {
      if (value === '') {
        next(new Error('请再次输入密码'))
      } else if (value !== this.form.password) {
        next(new Error('两次输入密码不一致'))
      } else {
        next()
      }
    }

    return {
      form: {
        username: '',
        password: '',
        rePassword: ''
      },
      validRegister: {
        username: [
          { validator: checkUsername, trigger: 'blur' }
        ],
        password: [
          { validator: checkPassword, trigger: 'blur' }
        ],
        rePassword: [
          { validator: checkRePassword, trigger: 'blur' }
        ]
      }
    }
  },

  components: {},

  computed: {},

  // mounted: {},

  methods: {
    async register (formName) {
      this.$refs[formName].validate(async (vaild) => {
        if (vaild) {
          let userInfo = await register(this.form)
          // debugger
          if (!userInfo.id) {
            this.$message({
              message: '帐号已存在',
              type: 'error'
            })
          } else {
            this.$alert('注册成功', '提示', {
              showClose: false
            }).then(() => {
              this.$router.push('login')
            })
          }
        }
      })
    },

    backToLogin () {
      this.$router.push('login')
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
