import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'This is a store message.',
    data: [
      10, 202, 30, 69
    ],
    items: [
      { name: 'Laps', value: 3 },
      { name: 'Circuit', value: 'Silverstone' },
      { name: 'Model', value: 'DB9' },
      { name: 'Manufacturer', value: 'Aston Martin' },
      { name: 'Best Lap', value: '1:43:23' }
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
    getData (state) {
      return state.data
    },
    getItems (state) {
      return state.items
    }
  }
})
