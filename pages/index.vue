<template>
  <section class="container">
    <div>
      <h2>Home</h2>
      <h2>
        <nuxt-link to="/about">About</nuxt-link>
      </h2>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
