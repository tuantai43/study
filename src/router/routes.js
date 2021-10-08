import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layout/DefaultLayout.vue';
import routesVirtualScroller from './views/virtual-scroller/routes';
const routes = [
    {
        path: '/virtual-scroller',
        component: DefaultLayout,
        children: routesVirtualScroller,
    },
];
export default function () {
    return createRouter({
        history: createWebHistory(),
        routes,
    });
}
