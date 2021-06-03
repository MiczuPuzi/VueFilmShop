<template>
  <v-container class="d-flex align-items-stretch flex-wrap">
    <v-row>
      <v-col cols="4" v-for="film in films" :key="film.id">
        <film-card :film="film"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FilmCard from "../components/FilmCard";

export default {
  name: "Films",
  components: {
    FilmCard
  },
  computed: {
    films() {
      return this.$store.getters.getFilms
    }
  }
}
</script>

<style scoped>

</style>