import { createApp } from 'vue';
import App from './App.vue';
import createRouter from './router/routes';
import components from './components';
import './assets/css/main.scss';

const router = createRouter();
createApp(App).use(router).use(components).mount('#app');
