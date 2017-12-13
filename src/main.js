import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import VueAnalytics from 'vue-analytics'
import App from './App.vue';
import HomePage from './pages/HomePage.vue';
import Lab1Page from './pages/Lab1Page.vue';
import Lab2Page from './pages/Lab2Page.vue';
import Lab3Page from './pages/Lab3Page.vue';
import Lab4Page from './pages/Lab4Page.vue';
import Lab5Page from './pages/Lab5Page.vue';
import Lab6Page from './pages/Lab6Page.vue';
import Lab7Page from './pages/Lab7Page.vue';
import Lab9Page from './pages/Lab9Page.vue';
import Lab10Page from './pages/Lab10Page.vue';
import Lab11Page from './pages/Lab11Page.vue';

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
        path: '/lab4',
        name: 'lab4',
        component: Lab4Page,
    },
    {
        path: '/lab5',
        name: 'lab5',
        component: Lab5Page,
    },
    {
        path: '/lab6',
        name: 'lab6',
        component: Lab6Page,
    },
    {
        path: '/lab7',
        name: 'lab7',
        component: Lab7Page,
    },
    {
        path: '/lab9',
        name: 'lab9',
        component: Lab9Page,
    },
    {
        path: '/lab10',
        name: 'lab10',
        component: Lab10Page,
    },
    {
        path: '/lab11',
        name: 'lab11',
        component: Lab11Page,
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
  root: '/home'
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
