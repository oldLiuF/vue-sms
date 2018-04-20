<!-- dashboard -->
<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { name: 'xxx1' },
        { name: 'xxx2' },
        { name: 'xxx3' },
        { name: 'xxx4' }
      ]
    }
  }/* ,

  components: {},

  computed: {},

  mounted: {},

  methods: {} */
}
</script>

<style scoped>
</style>
