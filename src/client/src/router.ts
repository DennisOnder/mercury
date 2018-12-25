// tslint:disable:object-literal-sort-keys
// tslint:disable:quotemark

import Vue from "vue";
import Router from "vue-router";
import Dashboard from './views/Dashboard.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    }
  ]
});
