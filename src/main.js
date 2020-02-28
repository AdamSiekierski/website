import Vue from 'vue';
import VueTypedJs from 'vue-typed-js';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueTypedJs);
Vue.use(VueScrollTo);

new Vue({
  router,
  render(h) {
    return h(App);
  },
}).$mount('#app');
