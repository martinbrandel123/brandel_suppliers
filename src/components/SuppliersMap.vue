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
      suppliers: [
        {
            id: 1,
            latitude: 45.184972,
            longitude: 5.765900
        },
        {
            id: 2,
            latitude: 13.710872,
            longitude: 100.602106
        }]
    };
  }
}
</script>

<style scoped>
    #SuppliersMap{
        width: 600px;
        margin: 50px auto;
    }
</style>
