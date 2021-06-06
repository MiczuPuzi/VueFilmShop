<template>
<v-app-bar color="grey darken-1" style="flex: auto" max-height="50px">
  <v-btn class="align-center" to="/films">Filmy</v-btn>
  <v-btn to="/opinions">Komentarze</v-btn>
  <v-btn to="/home">Strona główna</v-btn>
</v-app-bar>
</template>

<script>
export default {
  name: "NavigationBar"
}
</script>

<style scoped>
.v-btn{
  margin: 5px 15px 15px;
  position: center;
}

</style>