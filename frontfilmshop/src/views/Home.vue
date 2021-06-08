<template>
  <v-container class="fill-height">
      <v-row class="" style="position: center; text-align: center; ">
          <v-col cols="12">
              <h1 style="color: white">Witamy w naszym Sklepie</h1>
          </v-col>
      </v-row>
      <v-row class="justify-center">
          <v-col cols="12">
              <v-card v-if="!this.$store.state.authToken" color="blue-grey lighten-2" @click="register">
                  <v-card-title class="justify-center" >Logowanie/Rejestracja</v-card-title>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {

  methods: {
    register(){
      return this.$router.push({path: '/login'})
    }
  }

}
</script>

<style>

</style>