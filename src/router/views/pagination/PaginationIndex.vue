<template>
    <base-tutorial-page :title="label.title">
        <pagination-demo />
        <a href="#props">Props</a>
        <ul>
            <li>
                <span class="badge">amount</span>: Maximum number of buttons to
                show
            </li>
            <li>
                <span class="badge">total-pages</span>: Total number of pages
            </li>
            <li><span class="badge">index</span>: Current page number</li>
        </ul>
        <a href="#events">Events</a>
        <ul>
            <li>
                <span class="badge">updated-index</span>: Emitted when a page
                button was clicked. Value is Page number to select
            </li>
        </ul>
    </base-tutorial-page>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core';
export default {
    components: {
        PaginationDemo: defineAsyncComponent(() =>
            import('./PaginationDemo.vue')
        ),
    },
    setup() {
        const label = {
            title: 'Pagination',
        };
        return {
            label,
        };
    },
};
</script>
