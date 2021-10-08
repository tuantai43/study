<template>
    <base-virtual-scroller :items="routes" :amount="20" :item-height="30">
        <template #template="{ item }">
            <router-link :to="item.index" class="router-link"
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
        ];

        return {
            routes,
        };
    },
};
</script>
