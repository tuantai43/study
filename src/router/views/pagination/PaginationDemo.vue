<template>
    <p>Current page: {{ currentPage }}</p>
    <base-pagination
        v-model:index="currentPage"
        :total-pages="totalPages"
        :amount="5" />
</template>
<script setup>
import { ref } from '@vue/reactivity';
const totalPages = 20;
const currentPage = ref(0);

const updateIndex = (index) => {
    currentPage.value = index;
};
</script>
