<!-- home -->
<template>
    <el-container class="viewport">
      <el-header>
        <h1>Simple School Management System</h1>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">
          <el-menu  background-color="#409EFF" text-color="#fff" active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">test1</template>
              <el-menu-item index="1-1">
                <!-- <router-link>选项1</router-link> -->
              </el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  // mounted: {},

  methods: {}
}
</script>

<style lang="scss" scoped>
  .viewport {
    width: 100%;
    height: 100%;
  }
  .aside {
    background-color: #409EFF
  }
</style>
