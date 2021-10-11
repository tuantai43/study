<template>
    <base-virtual-scroller :items="routes" :amount="20" :item-height="30">
        <template #template="{ item }">
            <router-link
                :to="item.index"
                class="router-link"
                :title="item.text"
                :aria-label="item.text"
                >{{ item.text }}
            </router-link>
        </template>
    </base-virtual-scroller>
</template>
<script>
export default {
    setup() {
        const routes = [
            {
                text: 'Virtual scroller',
                index: 'virtual-scroller',
            },
            {
                text: 'Pagination',
                index: 'pagination',
            },
            {
                text: 'Notification',
                index: 'notification',
            },
            {
                text: 'Repository Factory',
                index: 'repository-factory',
            },
            {
                text: 'Single Page Apps for GitHub Pages',
                index: 'single-page-app-for-github-pages',
            },
        ];

        return {
            routes,
        };
    },
};
</script>
