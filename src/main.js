import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import VueAnalytics from 'vue-analytics'
import App from './App.vue';
import HomePage from './pages/HomePage.vue';
import Lab1Page from './pages/Lab1Page.vue';
import Lab2Page from './pages/Lab2Page.vue';
import Lab3Page from './pages/Lab3Page.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/lab1',
    name: 'lab1',
    component: Lab1Page,
  },
  {
    path: '/lab2',
    name: 'lab2',
    component: Lab2Page,
  },
    {
        path: '/lab3',
        name: 'lab3',
        component: Lab3Page,
    },
  {
    path: '*',
    redirect: {
      name: 'home',
    },
  },
];
const router = new VueRouter({
  routes,
  root: '/home',
  mode: "history"
});

Vue.use(Vuetify);
Vue.use(VueRouter);

Vue.use(VueAnalytics, {
    id: 'UA-107386321-1',
    router
});

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: h => h(App),
});
