import { defineAsyncComponent } from 'vue';

const components = [
    {
        name: 'the-header',
        component: defineAsyncComponent(() => import('./TheHeader.vue')),
    },
    {
        name: 'the-sidebar',
        component: defineAsyncComponent(() => import('./TheSidebar.vue')),
    },
    {
        name: 'the-footer',
        component: defineAsyncComponent(() => import('./TheFooter.vue')),
    },
    {
        name: 'base-virtual-scroller',
        component: defineAsyncComponent(() =>
            import('./BaseVirtualScroller.vue')
        ),
    },
    {
        name: 'base-tutorial-page',
        component: defineAsyncComponent(() => import('./BaseTutorialPage.vue')),
    },
    {
        name: 'base-pagination',
        component: defineAsyncComponent(() => import('./BasePagination.vue')),
    },
    {
        name: 'base-notification',
        component: defineAsyncComponent(() => import('./BaseNotification.vue')),
    },
];

export default components;
