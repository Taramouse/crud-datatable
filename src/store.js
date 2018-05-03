import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'Vuetify table of Vuex state items.',
    headers: [
      {
        text: 'Date Recorded',
        align: 'left',
        sortable: true,
        value: 'name'
      },
      { text: 'Laps', value: 'laps' },
      { text: 'Circuit', value: 'circuit' },
      { text: 'Model', value: 'model' },
      { text: 'Manufacturer', value: 'manufacturer' },
      { text: 'Best Lap', value: 'bestlap' },
      { text: 'Race Time', value: 'racetime' },
      { text: 'Actions', value: 'name', sortable: false }
    ],
    items: [
      {
        value: 'false',
        name: '03/05/2018',
        laps: 3,
        circuit: 'Silverstone',
        model: 'Vanquish',
        manufacturer: 'Aston Martin',
        bestlap: '1:25:23',
        racetime: '4:25:26'
      },
      {
        value: 'false',
        name: '04/05/2018',
        laps: 5,
        circuit: 'Le Manns',
        model: 'Cobra',
        manufacturer: 'AC',
        bestlap: '3:02:04',
        racetime: '15:25:26'
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    getMessage (state) {
      return state.msg
    },
    getHeaders (state) {
      return state.headers
    },
    getItems (state) {
      return state.items
    }
  }
})
