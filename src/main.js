import Vue from 'vue';
import VueTypedJs from 'vue-typed-js';
import VueScrollTo from 'vue-scrollto';

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueTypedJs);
Vue.use(VueScrollTo);
Vue.use(Toast, {
  position: 'bottom-right',
  timeout: 5000,
});

new Vue({
  router,
  render(h) {
    return h(App);
  },
}).$mount('#app');
