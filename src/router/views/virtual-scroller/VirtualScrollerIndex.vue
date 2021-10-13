<template>
    <base-tutorial-page :title="label.title" :description="label.description">
        <p>Demo with 100 row with dynamic height</p>
        <virtual-scroller-demo rows="100"></virtual-scroller-demo>
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
