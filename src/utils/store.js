import {createStore} from '@mpxjs/core'

const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    updateState(state, n) {
      state.count+=n
    },
  },
  actions: {
    loading ({ commit }) {
      commit('updateState', 1)
    },
    error ({ commit }) {
      commit('updateState', 2)
    },
    empty ({ commit }) {
      commit('updateState', 4)
    },
    finish ({ commit }) {
      commit('updateState', 8)
    },
  }
  
});

export default store