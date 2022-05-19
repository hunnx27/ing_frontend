<template>
  <div>
    <header class="header" />
    <div class="a"></div>
    <AppLayoutLinks />
    <slot />
  </div>
</template>

<script>
/* eslint-disable */
import AppLayoutLinks from '@/layouts/AppLayoutLinks'
export default {
  name: "AppLayoutAbout",
  components: {AppLayoutLinks},
  setup() {
    debugger;
  }
}
</script>

<style scoped>
.header {
  height: 5rem;
  background-color: blue;
}
</style>