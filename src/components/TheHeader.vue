<template>
    <div :class="['header', { transparent: transparent }]">
        <router-link :to="{ name: 'Home' }" class="router-link">
            <strong class="name">ptuantai</strong>
        </router-link>
        <div
            :class="['menu-icon', { change: toggle }]"
            @click="toggleIcon"
            v-if="!hideMenuIcon">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';
export default {
    setup(props, { emit }) {
        let toggle = ref(false);

        const toggleIcon = () => {
            toggle.value = !toggle.value;
            emit('toggle-icon', toggle.value);
        };

        fromEvent(window, 'resize')
            .pipe(filter(() => toggle.value))
            .subscribe(() => toggleIcon());

        return {
            toggle,
            toggleIcon,
        };
    },
    props: {
        hideMenuIcon: Boolean,
        transparent: Boolean,
    },
};
</script>
