<template>
  <v-dialog v-model="dialog" width="25%">
    <template v-slot:activator="{on, attrs}">
      <v-btn color="transparent" style="margin: 5px 15px 15px auto" v-on="on" v-bind="attrs">
        <v-badge color="blue-grey darken-2" :content="getNumberOfCardElements()" :value="getNumberOfCardElements() > 0">
          <v-icon color="green darken-1">
            mdi-cart
          </v-icon>
        </v-badge>
      </v-btn>
    </template>
    <v-card>
      <v-toolbar color="blue-grey darken-2" dark>
        <span>Cena ogólna: {{ getTotalPrice() }}zł</span>
        <v-spacer></v-spacer>
        <v-btn width="10%" style="position: center" color="green darken-1" @click="buyAndSendEmail">Kup</v-btn>
      </v-toolbar>
      <div id="empty-cart" v-if="getNumberOfCardElements() === 0">
        <v-card-text>
          <h1 style="text-align: center">Twój Koszyk jest pusty</h1>
          <br>
        </v-card-text>
      </div>
      <div v-if="getNumberOfCardElements() > 0">
        <v-card-text v-for="film in cart" :key="film.id">
          <film :film="film"></film>
        </v-card-text>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>

import Film from "./Film";
import {sendEmail} from "../api/api";

export default {
  name: "ShopBasket",
  components: {Film},
  computed: {
    cart() {
      return this.$store.getters.getCardElements
    }
  },
  data: () => ({
    dialog : false
  }),
  methods: {
    getNumberOfCardElements() {
      return this.$store.state.cart.length
    },
    getTotalPrice() {
      let sum = 0
      for (let film of this.cart) {
        sum += parseFloat(film.price)
      }
      return Math.round(sum)
    },
    buyAndSendEmail(){
      sendEmail(this.$store.getters.getLoggedEmail, this.cart, this.getTotalPrice())
          .then(() => this.dialog = false)
      this.cart = []
    }
  }
}
</script>

<style scoped>

</style>