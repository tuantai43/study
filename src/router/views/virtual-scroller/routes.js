const routesVirtualScroller = [
    {
        path: '',
        name: 'VirtualScroller',
        component: () =>
            import(
                /* webpackChunkName: "group-virtual-scroller" */ './VirtualScrollerIndex.vue'
            ),
    },
];

export default routesVirtualScroller;
