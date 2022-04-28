<template>
    <div id="SuppliersUnique">
        <div class="Supplier-cart">
            <h1>{{ name }}</h1>
            <h3 v-if="status" v-bind:class="{green:status}">A du stock ? OK</h3>
            <h3 v-if="!status" v-bind:class="{red:!status}">A du stock ? KO</h3>
            <h5>{{ checkedAt }}</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: "SupplierUnique",
    props: {
        name : String,
        status : Boolean,
        checkedAt : String,
    },
}
</script>


<style scoped>
    .red {
        color: red;
    }
    .green {
        color: green;
    }
    .Supplier-cart{
        width: 600px;
        border: 1px solid black;
        margin: 15px auto;
    }

</style>