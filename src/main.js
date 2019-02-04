import Vue from 'vue';
import VueTyperPlugin from 'vue-typer';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueTyperPlugin);
Vue.use(VueScrollTo);

new Vue({
  router,
  render(h) { return h(App); },
}).$mount('#app');
