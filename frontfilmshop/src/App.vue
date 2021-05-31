<template>
  <v-app>
    <div>
      <div class="choosePanel">
        <router-link class="link" to="/films">Filmy</router-link>
        <router-link class="link" to="/home">Strona główna</router-link>
        <router-link class="link" to="/login">Zaloguj</router-link>
      </div>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({

  }),
};
</script>

<style>
#app {
  background-image: url(./assets/background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.choosePanel {
  padding: 10px;
  text-align: center;
  font-size: 30px;
}

.link {
  margin-right: 50px;
  background: whitesmoke;
  color: white;
}
a{
  color: white;
}

</style>
