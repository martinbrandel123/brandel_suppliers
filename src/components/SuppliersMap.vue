<template>
    <div id="SuppliersMap">
         <div style="height: 60vh">
            <LMap :zoom="zoom" :center="center">
            <LTileLayer :url="url"></LTileLayer>
            <LMarker v-for="supplier in suppliers" :key="supplier.id" :lat-lng="[supplier.latitude ,supplier.longitude]"></LMarker>
            </LMap>
        </div>
    </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
const axios = require('axios').default;

export default {
    name: "SuppliersMap",
    components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 6,
      center: [46.5322, 2.9482],
      bounds: null,
      suppliers: [],
      loading: false,
      error: null,
    };
  },
      created (){
      axios
        .get('https://api-suppliers.herokuapp.com/api/suppliers')
        .then(result => {
            this.suppliers = result.data
        })
        .catch(error => {
            console.log(error)
        })
    }
}
</script>

<style scoped>
    #SuppliersMap{
        width: 600px;
        margin: 50px auto;
        border: 5px pink solid;
        border-radius: 10px;
    }
</style>
