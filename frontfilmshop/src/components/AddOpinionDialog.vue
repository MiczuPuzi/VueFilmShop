<template>
<v-dialog v-model="dialog" transition="dialog-bottom-transition">
  <template >
  <v-card>
    <v-card-title>
      Tworzenie Opini
    </v-card-title>
    <v-select
    :rate="rate"
    label="Ocena">
    </v-select>
  </v-card>
  </template>
</v-dialog>
</template>

<script>
export default {
name: "AddOpinionDialog",

  data () {
    return {
      dialog: false,
      rate: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style scoped>

</style>