<template>
  <div id="app">

    <!-- Déclaration de mes 4 composants navbar/productlist/contact/footer -->
    <navbar></navbar>
    <ProductList v-bind:products="products"></ProductList>
    <contact :products="products"></contact>
    <Footer></Footer>
  </div>
</template>

<script>
  //importation de mes 4 composants
  import ProductList from "./components/ProductList.vue";
  import Contact from "./components/Contact.vue";
  import Navbar from "./components/Navbar.vue";
  import Footer from "./components/Footer.vue";

  export default {
    name: "App",
    components: {
      ProductList,
      Contact,
      Navbar,
      Footer,
    },
    data() {
      return {

        //mon tableau de produits
        products: [

          {
            id: 1,
            title: "Produit A",
            category: "category A",
            done: false,
          },
          {
            id: 2,
            title: "Produit B",
            category: "category B",
            done: true,
          },
          {
            id: 3,
            title: "Produit C",
            category: "category C",
            done: false,
          },
          {
            id: 4,
            title: "Produit D",
            category: "category D",
            done: false,
          },
        ],
      };
    },
  };
</script>