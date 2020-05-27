<template>
  <div id="app">
    <!-- <Login />
    <List />
    <Details /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Login from './components/Login.vue'
// import List from './components/List.vue'
// import Details from './components/Details.vue'

export default {
  name: 'App',
  components: {
    // Login,
    // List,
    // Details
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
