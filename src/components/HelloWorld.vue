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
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <v-alert :value="true" color="error" icon="warning">
          Sorry, nothing to display here :(
        </v-alert>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="500px">
      <v-btn color="info" dark slot="activator" class="mt-2">Add Record</v-btn>
      <v-card>
        <v-card-title>
          <span>{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Date Recorded" v-model="editedItem.name"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Laps" v-model="editedItem.laps"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Circuit" v-model="editedItem.circuit"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Model" v-model="editedItem.model"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Manufacturer" v-model="editedItem.manufacturer"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Best Lap" v-model="editedItem.bestlap"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Race Time" v-model="editedItem.racetime"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {

  },
  data: () => ({
    dialog: false,
    editedIndex: -1,
    editedItem: {
      name: '',
      laps: 0,
      circuit: '',
      model: '',
      manufacturer: '',
      bestlap: '',
      racetime: ''
    },
    defaultItem: {
      name: '',
      laps: 0,
      circuit: '',
      model: '',
      manufacturer: '',
      bestlap: '',
      racetime: ''
    }
  }),
  computed: {
    message () {
      return this.$store.getters.getMessage
    },
    headers () {
      return this.$store.getters.getHeaders
    },
    items () {
      return this.$store.getters.getItems
    },
    formTitle () {
      return this.editedIndex === -1 ? 'New Record' : 'Edit Record'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.items.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)
      // Todo: Make this delete item from store
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem)
      } else {
        this.items.push(this.editedItem)
        // Todo: Make this add item to store
      }
      this.close()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
