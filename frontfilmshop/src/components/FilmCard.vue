<template>
  <v-container>
    <v-card color="grey darken-1">
      <v-card-title class="white--text justify-center">{{film.title}}</v-card-title>
      <v-card-subtitle class="white--text">Reżyser: {{film.directorName}}</v-card-subtitle>
      <v-card-text class="white--text">Cena: {{film.price}}</v-card-text>
      <v-card-text class="white--text">{{film.description}}</v-card-text>
      <v-btn class="float-right">Dodaj do koszyka</v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "FilmCard",
  props: ["film"]
}


</script>

<style scoped>

</style>