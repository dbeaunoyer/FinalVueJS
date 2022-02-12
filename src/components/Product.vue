<template>
  <div class="card">

    <!-- affichage du title et de la category venant de product -->
    <h1>{{ product.title }}</h1>
    <p class="category">{{ product.category }}</p>
    <div>
            <!-- affichage lorsque erreur -->
            <span v-if="wrongEmail" class="alert-danger">** courriel incorrecte **</span>
          </div>
  </div>
</template>

<script>
  export default {
    name: "Product",
    props: {
      product: {

        //  Définition du type de l'objet title et category afficher plus haut dans la card
        title: String,
        category: String
      }
    }
  };
</script>