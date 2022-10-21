<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <nuxt-link to="/">Home</nuxt-link>
    <h3>{{ fullName }}</h3>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data() {
      return {
        message: "Hello World",
        firstName: "Allen",
        lastName: "Liou"
      }
    },
    computed: {
      fullName(): string {
        return `${this.firstName} ${this.lastName}`
      }
    }
  })
</script>

<style scoped>

</style>