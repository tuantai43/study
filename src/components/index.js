import { defineAsyncComponent } from 'vue';

export default {
    install: (app) => {
        app.component(
            'the-header',
            defineAsyncComponent(() => import('./TheHeader.vue'))
        );
        app.component(
            'the-sidebar',
            defineAsyncComponent(() => import('./TheSidebar.vue'))
        );
        app.component(
            'the-footer',
            defineAsyncComponent(() => import('./TheFooter.vue'))
        );
        app.component(
            'base-virtual-scroller',
            defineAsyncComponent(() => import('./BaseVirtualScroller.vue'))
        );
        app.component(
            'base-tutorial-page',
            defineAsyncComponent(() => import('./BaseTutorialPage.vue'))
        );
        app.component(
            'base-pagination',
            defineAsyncComponent(() => import('./BasePagination.vue'))
        );
        app.component(
            'base-notification',
            defineAsyncComponent(() => import('./BaseNotification.vue'))
        );
    },
};
