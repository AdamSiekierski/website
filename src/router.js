import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './views/HomePage.vue';
import ProjectsPage from './views/ProjectsPage.vue';
import UsesPage from './views/UsesPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsPage,
    },
    {
      path: '/uses',
      name: 'Uses',
      component: UsesPage,
    },
  ],
});
