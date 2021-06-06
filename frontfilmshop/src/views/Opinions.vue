<template>
  <v-container class="d-flex align-items-stretch flex-wrap">
    <v-row>
      <v-col cols="4" v-for="opinion in opinions" :key="opinion.id">
        <opinion-card :opinion="opinion"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import OpinionCard from "../components/OpinionCard";


export default {
  name: "Opinions",
  components: {
    OpinionCard
  },
  computed: {
    opinions() {
      return this.$store.getters.getOpinions
    }
  },
}
</script>

<style scoped>

</style>