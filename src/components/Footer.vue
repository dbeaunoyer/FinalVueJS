<template>
  <footer class="text-center bg-dark align-middle">
    <div class="text-white">
      <strong>Examen VueJS Danny Beaunoyer </strong>
      <!-- Affichage date time   -->
      <!-- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat  -->

      <p>
        {{ (new Intl.DateTimeFormat('fr-ca', { dateStyle: 'full', timeStyle: 'short' }).format(date)) }}
      </p>

      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <img src="https://www.pngrepo.com/png/378479/512/vue-fill.png" class="logovujs" />
        </li>
      </ul>
    </div>
  </footer>
</template>