import { createApp } from 'vue';
import App from './App.vue';
import createRouter from './router/routes';
import components from './components';
import './assets/css/main.scss';

const router = createRouter();
const app = createApp(App);
components.map((cpn) => {
    app.component(cpn.name, cpn.component);
});
app.use(router);

app.mount('#app');
