// tslint:disable:object-literal-sort-keys
// tslint:disable:quotemark

import Vue from "vue";
import Router from "vue-router";
import Dashboard from './components/Dashboard.vue';
import Home from './components/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    }
  ]
});
