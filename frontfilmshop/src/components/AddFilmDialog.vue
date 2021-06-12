<template>
  <v-dialog width="50%" v-model="dialog" transition="dialog-bottom-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          fab
          icon
          color="white"
          v-on="on"
          v-bind="attrs"
      >
        <v-icon size="45">
          mdi-plus-circle
        </v-icon>
      </v-btn>

    </template>
    <v-card color="grey darken-3">
      <v-card-title class="justify-center white--text">
        Dodawanie Filmu
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
      <v-text-field
          dark
          label="Opis"
          v-model="newFilm.description"
          style="margin: 10px"
      ></v-text-field>
      <v-card-actions class="justify-center">
        <v-btn dark color="indigo" @click="addFilm"><v-icon>mdi-plus</v-icon></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {createFilm} from "@/api/api";

export default {
name: "AddFilmDialog",
  data() {
    return {
      dialog: false,
      newFilm: {
        title: '',
        directorName: '',
        price: '',
        description: '',
      },
    }
  },
  methods: {
    addFilm() {
      createFilm(this.newFilm).then((response) => {
        this.$store
            .dispatch("fetchFilms", response.data)
            .catch((error) => alert(error.response.data))
      })
      this.dialog = false
      this.newFilm.title = ''
      this.newFilm.directorName = ''
      this.newFilm.price = ''
      this.newFilm.description = ''
    },
  },
}
</script>

<style scoped>

</style>