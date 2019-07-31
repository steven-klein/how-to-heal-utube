import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      subscriber_count: '78',
      views_count: '12'
    },
    mutations: {
      set_subscriber_count (state, string) {
        state.subscriber_count = string
      },
      set_views_count (state, string) {
        state.views_count = string
      }
    }
  })

export default store