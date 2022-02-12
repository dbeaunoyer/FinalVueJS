<template>
  <div>
    <h1 class="text-center display-1">Liste des produits</h1>

    <!-- liason dans mon productlist du component product-->
    <product v-for="product in products" v-bind:product="product" v-bind:key="product.id"></product>
    
    <!-- liason dans mon productlist du component ProductEdit-->
    <product-edit :product="products[0]" :products="products"></product-edit>
  </div>
</template>


<script>
  // importation de mes deux composants Product & ProductEdit
  import ProductEdit from "./ProductEdit.vue";
  import Product from "./Product.vue";

  export default {
    name: "TodoList",
    components: {
      ProductEdit,
      Product,
    },
    props: {
      products: Array,
    },
  };
</script>