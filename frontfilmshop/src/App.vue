<template>
  <v-app>
    <navigation-bar/>
    <router-view></router-view>
  </v-app>
</template>

<script>

import NavigationBar from "./components/NavigationBar";

export default {
  name: 'App',
  components: {NavigationBar},
  data: () => ({}),
  mounted() {
    this.$store.dispatch('fetchFilms').catch(error => alert(error.response.data))
    this.$store.dispatch('fetchOpinions').catch(error => alert(error.response.data))
  }
};
</script>

<style>
#app {
  background-image: url(./assets/background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
