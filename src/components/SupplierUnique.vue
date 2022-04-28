<template>
    <div id="SuppliersUnique">
        <hr>
            <h1>{{ name }}</h1>
            <h3 v-if="status" v-bind:class="{green:status}">A du stock ? OK</h3>
            <h3 v-if="!status" v-bind:class="{red:!status}">A du stock ? KO</h3>
            <h5>{{ checkedAt }}</h5>
        <hr>
    </div>
</template>

<script>
export default {
    name: "SupplierUnique",
    props: {
        name : String,
        status : Boolean,
        checkedAt : String,
    }
}
</script>


<style scoped>
    .red {
        color: red;
    }
    .green {
        color: green;
    }
</style>