<template>
  <div id="floating-container">

  <div id="nav">
    <router-link to="/">HomeView</router-link> |
    <router-link to="/tourism">Tourisme</router-link>
    <router-link to="/gastronomie">Gastronomie</router-link>
    <router-link to="/artisanat">Artisanat</router-link>
  </div>

</div>
<router-view/>

</template>

<style scoped>
/* Styles spécifiques à ce composant */



#floating-container {
  position: fixed ;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 10px;
}
#nav {
  color: white;
  padding: 10px;
}

#nav a {
  text-decoration: none; /* Pour supprimer le soulignement des liens */
  color: black; /* Pour rendre le texte blanc */
  margin-right: 10px; /* Espacement horizontal entre les liens */
}

</style>
