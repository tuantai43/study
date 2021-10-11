<template>
    <base-tutorial-page>
        <factory-demo />
    </base-tutorial-page>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core';
export default {
    components: {
        FactoryDemo: defineAsyncComponent(() => import('./FactoryDemo.vue')),
    },
};
</script>
