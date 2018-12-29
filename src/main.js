import Vue from 'vue';
import VueTyperPlugin from 'vue-typer';
import App from './App.vue';
import router from './router';

const VueScrollTo = require('vue-scrollto');

Vue.config.productionTip = false;
Vue.use(VueTyperPlugin);
Vue.use(VueScrollTo);

new Vue({
  router,
  render(h) { return h(App); },
}).$mount('#app');
