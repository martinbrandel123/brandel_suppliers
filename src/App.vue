<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link to="/Suppliers">Suppliers</router-link> |
    <router-link to="/Map">Map</router-link> |
    <router-link to="/Supplier">Supplier</router-link>
    <router-view/>
  </div>
</template>

<script>



export default {

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
