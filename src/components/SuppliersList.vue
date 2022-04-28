<template>
    <div id="SuppliersList">
        <!-- <router-link to="/Supplier">Supplier</router-link>  -->
        <SupplierUnique 
        v-bind:name="name"
        v-bind:status="status"
        v-bind:checkedAt="checkedAt"
        />
        <!-- <router-view/> -->
    </div>
</template>

<script>
import SupplierUnique from './SupplierUnique.vue'

export default {
    name: "SuppliersList",
    data() {
        return {
            name: 'Mon fournisseur',
            status: true, // est ce qu'il y a du stock
            checkedAt: new Date().toLocaleString()  // date de la dernière mise à jour du stock
        }
    },
    components: {
    SupplierUnique
    }
}
</script>
