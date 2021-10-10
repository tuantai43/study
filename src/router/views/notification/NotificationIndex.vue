<template>
    <base-tutorial-page>
        <message-service-demo />
    </base-tutorial-page>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core';
export default {
    components: {
        MessageServiceDemo: defineAsyncComponent(() =>
            import('./NotificationDemo.vue')
        ),
    },
};
</script>
