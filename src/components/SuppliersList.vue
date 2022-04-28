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

export default {
    name: "SuppliersList",
    data() {
        return {
  suppliers: [
    {
      id: 1,
      name: "Fournisseur 1",
      status: true,
      checkedAt: new Date().toLocaleString()
    },
    {
      id: 2,
      name: "Fournisseur 2",
      status: false,
      checkedAt: new Date().toLocaleString()
    }
  ]
}
    },
    components: {
    SupplierUnique
    }
}
</script>
