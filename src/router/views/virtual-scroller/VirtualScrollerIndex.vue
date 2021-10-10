<template>
    <base-tutorial-page :title="label.title" :description="label.description">
        <p>Demo with 150,000 row</p>
        <virtual-scroller-demo></virtual-scroller-demo>
        <p>
            Cre:
            <a
                class="text-primary"
                title="Virtual scrolling: Core principles and basic implementation in React"
                aria-label="Virtual scrolling: Core principles and basic implementation in React"
                href="https://blog.logrocket.com/virtual-scrolling-core-principles-and-basic-implementation-in-react/">
                Virtual scrolling: Core principles and basic implementation in
                React
            </a>
        </p>
        <p>
            Source:
            <a
                class="text-primary"
                title="Github"
                aria-label="Github"
                href="https://github.com/tuantai43/study/blob/main/src/components/BaseVirtualScroller.vue">
                Github
            </a>
        </p>
    </base-tutorial-page>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core';
export default {
    setup() {
        const label = {
            title: 'Vue Virtual Scroller',
            description: 'Blazing fast scrolling of any amount of data',
        };
        return {
            label,
        };
    },
    components: {
        VirtualScrollerDemo: defineAsyncComponent(() =>
            import('./VirtualScrollerDemo.vue')
        ),
    },
};
</script>
