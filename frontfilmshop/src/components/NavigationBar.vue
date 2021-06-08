<template>
<v-app-bar color="grey darken-1" style="flex: auto" max-height="50px">
  <v-btn v-if="this.$store.state.authToken" class="align-center" to="/films">Filmy</v-btn>
  <v-btn v-if="this.$store.state.authToken" to="/opinions">Komentarze</v-btn>
  <v-btn to="/home">Strona główna</v-btn>
  <v-btn v-if="this.$store.state.authToken" @click="logOutUser">Wyloguj</v-btn>
  <shop-basket v-if="this.$store.state.authToken"/>
  <span style="color: white; margin-bottom: 10px">{{this.$store.getters.getLoggedEmail}}</span>
</v-app-bar>
</template>

<script>
import ShopBasket from "./ShopBasket";
export default {
  name: "NavigationBar",
  components: {ShopBasket},
  methods: {
    logOutUser(){
      localStorage.clear()
      this.$router.replace('/')
      this.$store.commit('setToken', '')
      this.$store.commit('setLoggedEmail', '')
    }
  }
}
</script>

<style scoped>
.v-btn{
  margin: 5px 15px 15px;

}

</style>