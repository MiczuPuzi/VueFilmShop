<template>
  <v-container>
    <v-card>
      <v-card-title>{{ opinion.filmTitle }}</v-card-title>
      <v-card-subtitle>Ocena: {{ opinion.rate }}</v-card-subtitle>
      <v-card-text>Opis: {{ opinion.description }}</v-card-text>
      <v-card-actions class="justify-end">
        <v-btn v-on:click="deleteOpinion(opinion._id)">
          <v-icon>
            mdi-delete
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>


import {deleteOpinion} from "../api/api";

export default {
  name: "OpinionCard",
  props: ["opinion"],

  methods: {
    deleteOpinion(opinionId) {
        deleteOpinion(opinionId).catch(error => alert(error.response.data)).then(response => {
          this.$store.dispatch('fetchOpinions', response.data).catch(error => alert(error.response.data))
        })
    }
  }
}
</script>

<style scoped>

</style>