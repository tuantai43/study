<template>
    <div class="container">
        <the-header @toggle-icon="onToggleIcon" />
        <div class="page-body">
            <the-sidebar :class="['sidebar', { active: displaySidebar }]" />
            <div class="page-content">
                <router-view></router-view>
            </div>
        </div>
        <the-footer />
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
    setup() {
        let displaySidebar = ref(false);

        const onToggleIcon = (value) => {
            displaySidebar.value = value;
        };
        return {
            displaySidebar,
            onToggleIcon,
        };
    },
};
</script>
