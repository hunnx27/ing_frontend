<template>
  <div id="app">
    <AppLayout>
      <router-view />
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from '@/layouts/AppLayout'
export default {
  name: 'App',
  components: { AppLayout }
}
</script>

<style lang="scss" scoped>
  #nav {
    padding: 15px 0;
    border-bottom: 1px solid #ababab;
    a{
      font-weight: bold;
      color: #2c3e50;
    }
    a.router-link-exact-active{
      color: #42b983;  
    }
  }
</style>