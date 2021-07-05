import Vue from 'vue';
import VueRouter from 'vue-router';
import path from './path';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: path,
});

export default router;
