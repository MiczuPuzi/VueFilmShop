<template>
  <v-dialog v-model="dialog" width="50%" transition="dialog-bottom-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          style="position: absolute; left: 90%"
          icon
          dark
          color="white"
          v-on="on"
          v-bind="attrs"
      >
        <v-icon>
          mdi-cog
        </v-icon>
      </v-btn>
      <v-tooltip v-if="chipActiv">
        Dodaj Film
      </v-tooltip>
    </template>
    <v-card color="grey darken-3">
      <v-card-title class="justify-center white--text">
        Zmiana filmu
      </v-card-title>
      <v-text-field
          dark
          label="Tytuł"
          v-model="newFilm.title"
          style="margin: 10px"
      ></v-text-field>
      <v-text-field
          dark
          label="Reżyser"
          v-model="newFilm.directorName"
          style="margin: 10px"
      ></v-text-field>
      <v-text-field
          type="number"
          dark
          label="Cena"
          v-model="newFilm.price"
          style="margin: 10px"
      ></v-text-field>
      <v-textarea
          dark
          label="Opis"
          v-model="newFilm.description"
          style="margin: 10px"
      ></v-textarea>
      <v-card-actions class="justify-center">
        <v-btn dark color="indigo" @click="updateFilm">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {updateFilm} from "@/api/api";

export default {
  name: "updateFilm",
  props: ["film"],
  data: () => ({
    chipActiv: false,
    dialog: false,
  newFilm: {}
}),
  mounted() {
    this.newFilm = JSON.parse(JSON.stringify(this.film))
  },
  methods: {
    updateFilm() {
      updateFilm(this.film, this.newFilm).then((response) => {
        this.$store
            .dispatch("fetchFilms", response.data)
            .catch((error) => alert(error.response.data))
      })
      this.dialog = false
      this.newFilm = JSON.parse(JSON.stringify(this.film))
    },
  },
}
</script>

<style scoped>

</style>