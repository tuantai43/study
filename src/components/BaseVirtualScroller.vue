<template>
    <div
        class="viewport"
        ref="viewportElement"
        @scroll="runScroller"
        :style="{ height: viewportHeight + 'px' }">
        <div :style="{ height: topPaddingHeight + 'px' }"></div>
        <template
            v-for="(item, itemIndex) in sources"
            :key="`virtual-item-${itemIndex}-${item[idProp]}`">
            <slot :item="item" v-if="$slots.template" name="template"></slot>
            <div
                class="virtual-item"
                :style="{ height: itemHeight + 'px' }"
                v-else>
                {{ item[textProp] }}
            </div>
        </template>
        <div :style="{ height: bottomPaddingHeight + 'px' }"></div>
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
    props: {
        start: {
            type: Number,
            default: 0,
            validator: function (value) {
                return value >= 0;
            },
        },
        itemHeight: {
            type: Number,
            default: 20,
            validator: function (value) {
                return value >= 1;
            },
        },
        amount: {
            type: Number,
            default: 5,
            validator: function (value) {
                return value >= 1;
            },
        },
        tolerance: {
            type: Number,
            default: 2,
            validator: function (value) {
                return value >= 1;
            },
        },
        items: {
            type: Array,
            default: () => [],
        },
        idProp: {
            type: String,
            default: 'index',
        },
        textProp: {
            type: String,
            default: 'text',
        },
    },
    setup(props) {
        let viewportHeight = props.amount * props.itemHeight;
        let totalHeight = props.items.length * props.itemHeight;
        const bufferedItems = props.amount + 2 * props.tolerance;
        let topPaddingHeight = ref(
            (props.start - props.tolerance) * props.itemHeight
        );
        let bottomPaddingHeight = ref(totalHeight - topPaddingHeight.value);
        let sources = ref([]);

        const getData = (offset, limit) => {
            let data = [];
            const start = Math.max(offset, 0);
            const end = Math.min(offset + limit - 1, props.items.length);
            if (start <= end) {
                data = props.items.slice(start, end);
            }
            return data;
        };

        const runScroller = ({ target: { scrollTop } }) => {
            const index = Math.floor(
                scrollTop / props.itemHeight - props.tolerance
            );
            sources.value = getData(index, bufferedItems);
            topPaddingHeight.value = Math.max(index * props.itemHeight, 0);
            bottomPaddingHeight.value = Math.max(
                totalHeight -
                    topPaddingHeight.value -
                    sources.value.length * props.itemHeight,
                0
            );
        };

        if (props.amount + props.tolerance >= props.items.length) {
            if (props.amount >= props.items.length) {
                viewportHeight = totalHeight;
            }
            topPaddingHeight.value = bottomPaddingHeight.value = 0;
            sources.value = props.items;
        } else {
        }
        runScroller({ target: { scrollTop: 0 } });

        return {
            viewportHeight,
            topPaddingHeight,
            bottomPaddingHeight,
            runScroller,
            sources,
        };
    },
};
</script>
<style lang="scss">
.viewport {
    overflow-y: auto;
}
</style>
