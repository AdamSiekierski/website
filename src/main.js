import { createApp } from 'vue';
// import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
// app.use(Toast, {
//   position: 'bottom-right',
//   timeout: 5000,
// });

app.mount('#app');
