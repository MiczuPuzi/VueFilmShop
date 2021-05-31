<template>
  <v-container>
    <v-slide-x-transition>
    <v-card color="grey darken-1">
      <v-card-title>{{film.title}}</v-card-title>
      <v-card-subtitle>{{film.directorName}}</v-card-subtitle>
      <v-card-text>{{film.price}}</v-card-text>
    </v-card>
      <v-btn>Dodaj do koszyka</v-btn>
    </v-slide-x-transition>
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