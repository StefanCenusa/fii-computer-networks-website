import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import App from './App.vue';
import HomePage from './pages/HomePage.vue';
import Lab1Page from './pages/Lab1Page.vue';

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
    path: '*',
    redirect: {
      name: 'home',
    },
  },
];
const router = new VueRouter({
  routes,
  root: '/home',
});

Vue.use(Vuetify);
Vue.use(VueRouter);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: h => h(App),
});
