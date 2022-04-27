<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p><span v-on:click="onSuppliersListClick()">Supplier</span> | <span v-on:click="onMapClick()">Map</span> </p>
    <HelloWorld msg="Nouveau projet de martin"/>
    <SuppliersList/>
    <SuppliersMap/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SuppliersList from './components/SuppliersList.vue'
import SuppliersMap from './components/SuppliersMap.vue'

export default {
  name: 'App',
  methods: {
    onSuppliersListClick () {
      alert('suppliers');
    },
    onMapClick(){
      alert('map');
    } 
  },
  components: {
    HelloWorld,
    SuppliersList,
    SuppliersMap
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
