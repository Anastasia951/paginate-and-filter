import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    pageSize: 4,
    current: 1
  },
  mutations: {
    setData(state, data) {
      state.data = data
    },
    setPageSize(state, pageSize) {
      state.pageSize = pageSize
    },
    setCurrent(state, current) {
      state.current = current
    }
  },
  actions: {
    setData({commit}, data) {
      commit('setData', data)
    },
    setPageSize({commit}, pageSize) {
      commit('setPageSize', pageSize)
    },
    setCurrent({commit, getters}, [page, next]) {
      if (next && page > getters.getPageNumber) return
      if (!next && page < 1) return
      commit('setCurrent', page)
    }
  },
  getters: {
    getData(state) {
      return state.data.slice((state.current - 1) * state.pageSize, +(state.current - 1) * state.pageSize + +state.pageSize)
    },
    getPageNumber(state) {
      return Math.ceil(state.data.length / state.pageSize)
    },
    getCurrent(state) {
      return state.current
    }
  },
  modules: {
  }
})
