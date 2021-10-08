import { defineAsyncComponent } from 'vue';

const TheHeader = defineAsyncComponent(() =>
    import(/* webpackChunkName: "group-common-components" */ './TheHeader.vue')
);

const TheSidebar = defineAsyncComponent(() =>
    import(/* webpackChunkName: "group-common-components" */ './TheSidebar.vue')
);
const TheFooter = defineAsyncComponent(() =>
    import(/* webpackChunkName: "group-common-components" */ './TheFooter.vue')
);
const BaseVirtualScroller = defineAsyncComponent(() =>
    import(
        /* webpackChunkName: "group-common-components" */ './BaseVirtualScroller.vue'
    )
);
const BaseTutorialPage = defineAsyncComponent(() =>
    import(
        /* webpackChunkName: "group-common-components" */ './BaseTutorialPage.vue'
    )
);
const components = [
    {
        name: 'the-header',
        component: TheHeader,
    },
    {
        name: 'the-sidebar',
        component: TheSidebar,
    },
    {
        name: 'the-footer',
        component: TheFooter,
    },
    {
        name: 'base-virtual-scroller',
        component: BaseVirtualScroller,
    },
    {
        name: 'base-tutorial-page',
        component: BaseTutorialPage,
    },
];

export default components;
