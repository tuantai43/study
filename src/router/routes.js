import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layout/DefaultLayout.vue';
import routesVirtualScroller from './views/virtual-scroller/routes';
import Home from './views/Home.vue';
const routes = [
    {
        path: '/study/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/study/virtual-scroller',
        component: DefaultLayout,
        name: 'VirtualScroller',
        children: routesVirtualScroller,
    },
];
export default function () {
    return createRouter({
        history: createWebHistory(),
        routes,
    });
}
