<!-- dashboard -->
<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{item.label}}
      </li>
    </ul>
    <el-select
    v-model="val"
    placeholder="请选择文章标签"
    @change="selectChange">
    <el-option
      v-for="item in list"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { label: 'xxx1', value: 1 },
        { label: 'xxx2', value: 2 },
        { label: 'xxx3', value: 3 },
        { label: 'xxx4', value: 4 }
      ],
      val: 2
    }
  },

  components: {},

  computed: {},

  mounted () {
    console.log(`value: ${this.val}`)
    this.val = 3
  },

  methods: {
    selectChange (value) {
      console.log(`change value: ${value}`)
    }
  }
}
</script>

<style scoped>
</style>
