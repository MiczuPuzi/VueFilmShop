<template>
  <v-container class="d-flex align-items-stretch flex-wrap">
    <v-row class="justify-center">
      <v-col>
        <add-film-dialog v-if="this.$store.state.admin"/>
      </v-col>
    </v-row>

    <v-row class="justify-center">
      <v-col
          cols="12"
          sm="8"
          md="6"
          lg="4"
          v-for="film in films"
          :key="film.id"
      >
        <film-card :film="film"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FilmCard from "../components/FilmCard"
import AddFilmDialog from "@/components/AddFilmDialog";

export default {
  name: "Films",
  components: {

    AddFilmDialog,
    FilmCard,
  },
  computed: {
    films() {
      return this.$store.getters.getFilms
    },
  },
}
</script>

<style scoped></style>
