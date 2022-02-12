<template>
  <div class="container">
    <h1 class="text-center display-1">Formulaire contact</h1>
    <!-- form -->
    <div>
      <form @submit.prevent="ajoutcontact">
        <div>

          <!-- input form v-model -->
          <input v-model="prenom" required type="text" placeholder="prenom">
          <input v-model="nom" required type="text" placeholder="nom">
          <input v-model="courriel" required type="email" placeholder="courriel" @keypress="isEmailValid">
          <div>
            <!-- affichage lorsque erreur -->
            <span v-if="wrongEmail" class="alert-danger">** courriel incorrecte **</span>
          </div>
          <div>

            <!-- select v-model-->
            <select v-model="category">
              <option value="">Choisir une catégorie</option>

              <!-- v-for category in categories pour aller chercher la liste dans app.vue-->
              <option class="options" v-for="category in categories" v-bind:key="category">

                <!-- Affichage des category-->
                {{ category }}
              </option>
            </select>
          </div>
        </div>
        <input type="submit" value="Ajouter un contact" />
      </form>
      <!-- !form -->


      <!-- affichage de la liste des contacts  -->
      <div class=" container">
        <h1 class="text-center display-1 ">Liste des contacts</h1>
        <div class="card mt-4">

          <!-- Utilisation du v-for ,index + key="index"   -->
          <div class="border border-dark m-2 p-2" v-for="(contact,index) in contacts" :key="index">
            <h2 class="text-center">{{ contact.prenom }}</h2>
            <h2 class="text-center">{{ contact.nom }}</h2>
            <p class="text-center">{{ contact.category }}</p>
            <p class="text-center">{{ contact.courriel }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  const emailregverif =
    (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  export default {
    props: ['products'],
    data() {


      return {
        nom: '',
        prenom: '',
        courriel: '',
        category: '',
        contacts: [],
        wrongEmail: false
      }
    },
    computed: {
      categories() {
        return [...new Set(this.products.map(data => data.category))];
      }
    },
    methods: {
      isEmailValid() {
        if (emailregverif.test(this.courriel)) {
          this.wrongEmail = false;
        } else {
          this.wrongEmail = true;
        }
      },

      ajoutcontact() {
        const contact = {
          nom: this.nom,
          prenom: this.prenom,
          courriel: this.courriel,
          category: this.category,
        };
        this.contacts.push(contact)
      },
    }
  };
</script>