<template>
  <v-container class="fill-height">
      <v-row class="" style="position: center; text-align: center; ">
          <v-col cols="12">
              <h1 style="color: white">Witamy w naszym Sklepie</h1>
          </v-col>
      </v-row>
      <v-row class="justify-center">
          <v-col cols="12">
              <v-card color="blue-grey lighten-2" @click="goToMainPage">
                  <v-card-title class="justify-center" >Zaloguj się</v-card-title>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {

  methods: {
    goToMainPage(){
      return this.router.push('/app')
    }
  }

}
</script>

<style>

</style>