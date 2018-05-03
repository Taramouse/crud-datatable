<template>
  <div>
    <h1>{{ message }}</h1>
    <v-list-tile>
      <v-list-tile-title v-for="item in data" :key="item">{{ item }}</v-list-tile-title>
    </v-list-tile>
    <v-list>
      <v-list-tile v-for="item in items" :key="item.name">
        <v-list-tile-content>{{ item.name }}</v-list-tile-content>
        <v-list-tile-content>{{ item.value }}</v-list-tile-content>
      </v-list-tile>
    </v-list>

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
    data () {
      return this.$store.getters.getData
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
