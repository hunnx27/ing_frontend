<template>
  <div id="nav">
      <router-link to="/login">Login</router-link> | 
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link> |
      <router-link to="/quisarSample">QuisarSample</router-link>
  </div>
  <router-view />
</template>

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