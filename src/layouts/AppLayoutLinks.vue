<template>
  <div id="nav">
    <router-link to="/login">Login</router-link> | 
    <router-link to="/">Home</router-link> | 
    <router-link to="/about">About</router-link> |
    <router-link to="/quisarSample">QuisarSample</router-link>
  </div>
</template>

<script>
export default {
    name: "AppLayoutLinks",
    setup(){
      console.log('aaa');
    }
}
</script>

<style scoped>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>