<template>
    <p>Current page: {{ currentPage }}</p>
    <base-pagination
        :index="currentPage"
        :total-pages="totalPages"
        :amount="5"
        @updated-index="updateIndex" />
</template>
<script>
import { ref } from '@vue/reactivity';
export default {
    setup() {
        const totalPages = 20;
        const currentPage = ref(0);

        const updateIndex = (index) => {
            currentPage.value = index;
        };

        return {
            totalPages,
            currentPage,
            updateIndex,
        };
    },
};
</script>
