import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layout/DefaultLayout.vue';
import Home from './views/Home.vue';
import routesVirtualScroller from './views/virtual-scroller/routes';
import routesPagination from './views/pagination/routes';
import routesNotification from './views/notification/routes';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/tutorial',
        component: DefaultLayout,
        children: [
            ...routesVirtualScroller,
            ...routesPagination,
            ...routesNotification,
            {
                path: '/single-page-app-for-github-pages',
                component: () => import('./views/SinglePageAppGithub.vue'),
            },
        ],
    },
];
export default function () {
    return createRouter({
        history: createWebHistory('/study'),
        routes,
    });
}
