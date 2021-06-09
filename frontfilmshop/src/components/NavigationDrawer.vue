<template>
  <v-menu>
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-on="on" v-bind="attrs" class="toolbar-menu-btn">
        <v-icon>
          mdi-menu
        </v-icon>
      </v-btn>
    </template>
    <v-list class="nav-items" color="grey darken-1">
      <v-btn class="nav-btn" v-if="this.$store.state.authToken" to="/films"
        >Filmy</v-btn
      >
      <v-btn class="nav-btn" v-if="this.$store.state.authToken" to="/opinions"
        >Komentarze</v-btn
      >
      <v-btn
        class="nav-btn"
        v-if="this.$store.state.authToken"
        @click="logOutUser"
        >Wyloguj</v-btn
      >
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },

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
.nav-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
}

.nav-btn {
  width: 100%;
  margin: 10px 0;
}
</style>
