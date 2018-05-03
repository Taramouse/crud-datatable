<template>
  <div>
    <h1 class="text-xs-center info--text mb-2">{{ message }}</h1>

    <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.laps }}</td>
      <td class="text-xs-right">{{ props.item.circuit }}</td>
      <td class="text-xs-right">{{ props.item.model }}</td>
      <td class="text-xs-right">{{ props.item.manufacturer }}</td>
      <td class="text-xs-right">{{ props.item.bestlap }}</td>
      <td class="text-xs-right">{{ props.item.racetime }}</td>
      </template>
    </v-data-table>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {

  },
  computed: {
    message () {
      return this.$store.getters.getMessage
    },
    headers () {
      return this.$store.getters.getHeaders
    },
    items () {
      return this.$store.getters.getItems
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
