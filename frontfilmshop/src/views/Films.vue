<template>
  <div class="d-flex align-items-stretch flex-wrap">
    <h1>123123</h1>
    <film-card v-for="film in films" :key="film.id" :film="film"/>
  </div>
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
  },

}
</script>

<style scoped>

</style>