<template>
    <div :class="['notify-item', type, animate]">
        <div v-if="title">{{ title }}</div>
        <div v-if="content">{{ content }}</div>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity';
export default {
    props: {
        index: Number,
        title: String,
        content: String,
        icon: String,
        type: {
            type: String,
            default: 'warning',
            validator: (value) => {
                return ['warning', 'danger'].includes(value);
            },
        },
        timer: {
            type: Number,
            default: 2000,
            validator: (value) => {
                return value > 0;
            },
        },
    },
    emits: ['clear-item'],
    setup(props, { emit }) {
        const animate = ref('move-in');

        // effect fade in
        setTimeout(() => {
            animate.value = '';
        }, 100);

        // effect fade out
        setTimeout(() => {
            animate.value = 'move-out';
        }, props.timer);

        // after effect => delete notify
        // 250: timer for effect
        setTimeout(() => {
            emit('clear-item', props.index);
        }, props.timer + 250);
        return {
            animate,
        };
    },
};
</script>
