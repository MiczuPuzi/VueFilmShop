<template>
  <v-card>
    <v-card-title class="justify-center">{{ film.title }}</v-card-title>
    <v-card-subtitle>Reżyser: {{ film.directorName }}</v-card-subtitle>
    <v-card-text >Cena: {{ film.price }}zł</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Film",
  props: ['film']
}
</script>

<style scoped>

</style>