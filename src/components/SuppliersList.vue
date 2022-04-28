<template>
    <div id="SuppliersList">
        <SupplierUnique 
        v-for="supplier in suppliers"
        :key="supplier.id"
        v-bind:name="supplier.name"
        v-bind:status="supplier.status"
        v-bind:checkedAt="supplier.checkedAt"
        />
    </div>
</template>

<script>
import SupplierUnique from './SupplierUnique.vue'
//import { format } from 'timeago.js';
const axios = require('axios').default;


export default {
    name: "SuppliersList",
    data () {
        return {
            suppliers: [], // au début la liste des fournisseurs est vide
            loading: false,
            error: null,
        }
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
    },
    components: {
    SupplierUnique
    },
    
}
</script>

