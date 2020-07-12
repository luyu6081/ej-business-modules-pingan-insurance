<template>
  <div id="app">
    <div id="app-nav">
      <router-link tag="header" to="/">@ej/business-modules</router-link>
      <router-link to="/apollo">Apollo</router-link>
      <router-link to="/direct-message">Direct Message</router-link>
      <router-link to="/user">User</router-link>
    </div>
    <router-view id="app-view"/>
  </div>
</template>

<script>
  import '~/assets/base.css'
  import '~/apollo'
  import router from './router'

  export default {
    router,

    name: 'App',
  }
</script>

<style lang="scss">
  html, body {
    height: 100vh;
    margin: 0;
  }

  #app {
    height: 100%;
    display: flex;
  }

  #app-nav {
    flex: none;
    width: 200px;
    background: #ddeeff;
    border-right: 1px solid rgba(0,0,0,.2);

    header {
      color: white;
      background: #42b983;
      line-height: 30px;
      padding: 0 20px;
      font-family: monospace;
      cursor: pointer;
    }

    a {
      display: block;
      line-height: 30px;
      padding: 0 20px;
      text-decoration: none;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  #app-view {
    flex: 1;
    padding: 50px;
  }
</style>
