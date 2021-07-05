import Vue from 'vue'
import Vuex from 'vuex'
import rates from './modules/rates'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    rates,
  },
})
