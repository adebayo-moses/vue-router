import { createRouter, createWebHistory } from 'vue-router';
import Home from '../router/views/Home.vue';
import Docs from '../router/views/Docs.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/docs',
    name: '/Docs',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
