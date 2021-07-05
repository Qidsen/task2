import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store/store';
import axios from 'axios';
import { BootstrapVue } from 'bootstrap-vue';

axios.defaults.baseURL = "https://currencyapi-net.p.rapidapi.com/";
axios.defaults.headers.common = {
  'Content-Type': 'application/json',
  'x-rapidapi-key': '1e3dd15e02msh22a546ba0e18fa1p1a6056jsn9993d4c103dd',
  'x-rapidapi-host': 'currencyapi-net.p.rapidapi.com',
};

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
