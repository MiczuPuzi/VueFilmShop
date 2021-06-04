<template>
  <v-dialog width="35%" v-model="dialog" transition="dialog-bottom-transition">
    <template v-slot:activator="{on, attrs}">
      <v-btn
          class="mx-2"
          dark
          color="indigo"
          v-on="on"
          v-bind="attrs"
      >
        Dodaj Komentarz
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        Tworzenie Opinii
      </v-card-title>
      <v-select
          v-model="newOpinion.rate"
          style="margin: 10px"
          :items="rates"
          label="Ocena">
      </v-select>
      <v-text-field v-model="newOpinion.description" style="margin: 10px"></v-text-field>
    </v-card>
  </v-dialog>
</template>

<script>

import FilmCard from "./FilmCard";

export default {
  name: "AddOpinionDialog",

  data() {
    return {
      dialog: false,
      rates: [1, 2, 3, 4, 5],
      newOpinion: {
        filmTitle : FilmCard.computed.getFilmTitle(),
        rate : '',
        description : ''
      }
    }
  }
}
</script>

<style scoped>

</style>