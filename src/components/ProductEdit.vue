<template>
  <div class="container mt-4 bg-success ">
    <h1 class="text-center display-1">Ajout de produits</h1>
    <!-- input v-model du title produit  -->
    <input type="text" id="produit" v-model="products.title" placeholder=" Titre du produit" />
    <div>
            <!-- affichage lorsque erreur -->
            <span v-if="wrongEmail" class="alert-danger">** courriel incorrecte **</span>
          </div>

    <!-- V-model de la catégorie du produit  -->
    <select v-model="products.category" placeholder=" Choisir une catégorie">
      <option>Choisir une catégorie</option>

      <option v-for="category in categories" v-bind:key="category">
        <!-- Affichage de "category" dans le select -->
        {{ category}}
      </option>
    </select>
    <!-- submit avec event click @Affichproducts -->
    <input class=" bg-alert" type="submit" value="Ajouter un produit" @click="Affichproducts()" />
  </div>
</template>


<script>
  export default {
    name: "ProductEdit",
    props: {
      products: Array
    },
    data() {
      return {
        product: {
          title: "",
          category: ""
        }
      };
    },
    computed: {
      categories() {

        //L'objet Set (Ensemble en français) permet de stocker des valeurs uniques, de n'importe quel type, que ce soit des valeurs d'un type primitif ou des objets.
        // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Set
        const ajoutcat = [...new Set(this.products.map(data => data.category))];

        return ajoutcat;
      }
    },
    methods: {
      Affichproducts() {

        //afficher les produits entré dans le contact 
        const categories = {
          title: this.products.title,
          category: this.products.category
        };

        this.products.push(categories);
      }
    }
  };
</script>