
<script>

import {Pie} from 'vue-chartjs'

export default {
  extends: Pie,
  name: "opinionPieChart",
  mounted() {
    this.renderChart(data, options)
  }
}
</script>

<style scoped>

</style>