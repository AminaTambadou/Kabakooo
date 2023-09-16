<template>
    <div id="nav">
      <router-link to="/">HomeView</router-link> |
      <router-link to="/tourism">Tourisme</router-link>
      <router-link to="/gastronomie">Gastronomie</router-link>
      <router-link to="/artisanat">Artisanat</router-link>
    </div>
    <router-view/>
  </template>
  
  <style scoped>
  /* Styles spécifiques à ce composant */
  #nav {
    color: white;
    padding: 10px;
  }
  
  #nav a {
    text-decoration: none; /* Pour supprimer le soulignement des liens */
    color: white; /* Pour rendre le texte blanc */
    margin-right: 10px; /* Espacement horizontal entre les liens */
  }
  
  </style>
  