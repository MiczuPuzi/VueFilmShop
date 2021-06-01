<template>
<v-container>
  <v-card>
    <v-card-title>Ocena: {{opinion.rate}}</v-card-title>
    <v-card-text>Opis: {{opinion.description}}</v-card-text>
  </v-card>
</v-container>
</template>

<script>
export default {
  name: "OpinionCard",
  props:["opinion"]
}
</script>

<style scoped>

</style>