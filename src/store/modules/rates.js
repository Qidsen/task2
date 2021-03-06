import axios from 'axios';
import { CRYPTO_CURRENCIES } from '@/constants/CRYPTO_CURRENCIES';
import { VALUE_CURRENCIES } from '@/constants/VALUE_CURRENCIES';

export default {
  namespaced: true,
  state: {
    rateCrypto: {},
    rateValue: {},
  },
  mutations: {
    takeRatesCrypto(state, payload) {
      let filteredArray = {};
      Object.keys(payload).filter(function(e){
        return CRYPTO_CURRENCIES.indexOf(e) >= 0;
      }).forEach(function(e){
        filteredArray[e] = payload[e];
      });
      state.rateCrypto = filteredArray;
    },
    takeRatesValue(state, payload) {
      let filteredArray = {};
      Object.keys(payload).filter(function(e){
        return VALUE_CURRENCIES.indexOf(e) >= 0;
      }).forEach(function(e){
        filteredArray[e] = payload[e];
      });
      state.rateValue = filteredArray;
    },
  },
  actions: {
    GET_RATES({ commit }) {
      return axios.get('/rates').then(({ data }) => {
        commit('takeRatesCrypto', data.rates);
        commit('takeRatesValue', data.rates);
      });
    },
  },
}
