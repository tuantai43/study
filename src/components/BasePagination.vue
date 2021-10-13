<template>
    <ul class="pagination">
        <li>
            <button
                :class="['page-link', { disabled: disabledPrev }]"
                @click="changePage(true)">
                Prev
            </button>
        </li>
        <template v-for="item in pagesLink" :key="`number-${item}`">
            <slot name="template" :item="item" v-if="$slots.template"></slot>
            <li v-else>
                <button
                    :class="['page-link', { active: item === index }]"
                    @click="updateIndex(item)">
                    {{ item }}
                </button>
            </li>
        </template>
        <li>
            <button
                :class="['page-link', { disabled: disabledNext }]"
                @click="changePage(false)">
                Next
            </button>
        </li>
    </ul>
</template>
<script setup>
import { computed, ref } from '@vue/reactivity';
const props = defineProps({
    amount: {
        type: Number,
        default: 3,
        validator: (value) => {
            return value > 1;
        },
    },
    totalPages: {
        type: Number,
        default: 0,
        validator: (value) => {
            return value > 0;
        },
    },
    index: {
        type: Number,
        default: 0,
    },
});
const emit = defineEmits(['update:index']);
let pagesLink = ref([]);
const getStart = (number) => {
    if (number > props.totalPages) {
        return Math.max(0, props.totalPages - props.amount);
    } else {
        return Math.max(0, number - Math.floor(props.amount / 2));
    }
};
const start = getStart(props.index);
const amount = start + props.amount;
let end = amount > props.totalPages ? props.totalPages : amount;

for (let i = start; i < end; i++) {
    pagesLink.value.push(i);
}

const disabledPrev = computed(() => props.index <= 0);
const disabledNext = computed(() => props.index + 1 >= props.totalPages);

const updateIndex = (number) => {
    emit('update:index', number);
};

const changePage = (isLeft = false) => {
    if (isLeft && !disabledPrev.value) {
        // click prev item
        let index = props.index - 1;
        if (props.index > props.totalPages - 1) {
            index = props.totalPages - 1;
        }
        updateIndex(index);
        const itemStart = pagesLink.value[0];
        // check if current index < first item
        // => add index to first of the list
        // => remove last item if over amount
        if (index < itemStart) {
            pagesLink.value.unshift(index);
            pagesLink.value.length > props.amount && pagesLink.value.pop();
        }
    } else if (!isLeft && !disabledNext.value) {
        // click next item
        let index = props.index + 1;
        if (index < 0) {
            index = 0;
        }
        updateIndex(index);
        const itemEnd = pagesLink.value[pagesLink.value.length - 1];
        // check if current index > last number
        // => add index to end of the list
        // => remove first item if over amount
        if (index > itemEnd) {
            pagesLink.value.push(index);
            pagesLink.value.length > props.amount && pagesLink.value.shift();
        }
    }
};
</script>
