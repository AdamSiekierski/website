import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from './views/HomePage.vue';
import UsesPage from './views/UsesPage.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/uses',
      component: UsesPage,
    },
  ],
});
