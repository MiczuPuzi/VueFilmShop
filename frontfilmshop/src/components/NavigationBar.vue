<template>
  <v-app-bar color="grey darken-1" style="flex: auto" max-height="50px">
    <div class="toolbar-content">
      <v-btn v-if="this.$store.state.authToken" class="align-center" to="/films"
      >Filmy
      </v-btn
      >
      <v-btn v-if="this.$store.state.authToken" to="/opinions"
      >Komentarze
      </v-btn
      >
      <v-btn v-if="this.$store.state.authToken" @click="logOutUser"
      >Wyloguj
      </v-btn
      >
    </div>
    <div v-if="this.$store.state.authToken" class="toolbar-menu-btn">
      <navigation-drawer/>
    </div>
    <shop-basket v-if="this.$store.state.authToken"/>
    <span style="color: white; margin-bottom: 10px">{{
        this.$store.getters.getLoggedEmail
      }}</span>
  </v-app-bar>
</template>

<script>
import NavigationDrawer from "./NavigationDrawer.vue"
import ShopBasket from "./ShopBasket"

export default {
  name: "NavigationBar",
  components: {ShopBasket, NavigationDrawer},
  methods: {
    logOutUser() {
      localStorage.clear()
      this.$router.replace("/")
      this.$store.commit("setToken", "")
      this.$store.commit("setLoggedEmail", "")
      this.$store.state.cart = []
    },
  },
}
</script>

<style scoped>
.toolbar-menu-btn {
  display: none;
  margin-bottom: 8px;
}

.v-btn {
  margin: 5px 15px 15px;
}

@media (max-width: 768px) {
  .toolbar-content {
    display: none;
  }

  .toolbar-menu-btn {
    display: block;
  }
}
</style>
