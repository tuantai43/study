<script>
// This starter template is using Vue 3 <script setup> SFCs

import { ref } from 'vue';

// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
export default {
    setup() {
        const theme = ref('default-theme');
        return { theme };
    },
};
</script>

<template>
    <div :class="theme">
        <router-view></router-view>
    </div>
</template>
