<template>
  <v-card>
    <v-card-title class="justify-center">{{ film.title }}</v-card-title>
    <v-card-subtitle>Reżyser: {{ film.directorName }}</v-card-subtitle>
    <v-card-text >Cena: {{ film.price }}zł</v-card-text>
    <v-card-actions>
      <v-btn v-on:click="removeFilm(film)">
        <v-icon>
          mdi-delete
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Film",
  props: ['film'],
  methods:{
    removeFilm(film){
      this.$store.commit('removeFromCard',film)
    }
  }
}
</script>

<style scoped>

</style>