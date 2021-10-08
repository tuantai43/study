<template>
    <div class="header">
        <strong class="name">ptuantai</strong>
        <div :class="['menu-icon', { change: toggle }]" @click="toggleIcon">
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
};
</script>
