<template>
    <div class="virtual-scroller" @scroll="runScroller" :style="boxStyle">
        <div class="viewport" :style="viewportStyle">
            <div ref="spacer" :style="spacerStyle">
                <template
                    v-for="(item, itemIndex) in sources"
                    :key="`virtual-item-${itemIndex}-${item[idProp]}`">
                    <slot
                        :item="item"
                        v-if="$slots.template"
                        name="template"></slot>
                    <div
                        class="virtual-item"
                        :style="{ minHeight: `${itemHeight}px` }"
                        v-else>
                        {{ item[textProp] }}
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import { computed, nextTick, onMounted, ref } from 'vue';
export default {
    props: {
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
        let boxHeight = props.amount * props.itemHeight;

        let rowsHeight = [];
        let transforms = ref([]);
        rowsHeight[-1] = transforms.value[-1] = 0;

        let spacerTransformY = ref(0);

        let totalHeight = computed(
            () =>
                rowsHeight[rowsHeight.length - 1] +
                transforms.value[transforms.value.length - 1]
        );

        let viewportStyle = computed(() => ({
            height: `${totalHeight.value}px`,
        }));

        const boxStyle = computed(() => ({
            height: `${Math.min(boxHeight, totalHeight.value)}px`,
        }));

        let spacerStyle = computed(() => ({
            transform: `translateY(${spacerTransformY.value}px)`,
        }));

        let spacer = ref(null);
        let sources = ref([]);

        const getData = (offset, limit) => {
            let data = [];
            const start = Math.max(offset, 0);
            const end = Math.min(offset + limit + 1, props.items.length);
            if (start <= end) {
                data = props.items.slice(start, end);
            }
            return data;
        };

        const findNodePosition = (scroll, left, right) => {
            if (left > right) {
                return right;
            }
            const middle = Math.floor((left + right) / 2);
            if (transforms.value[middle] === scroll) {
                return middle;
            } else if (transforms.value[middle] < scroll) {
                return findNodePosition(scroll, middle + 1, right);
            } else {
                return findNodePosition(scroll, left, middle - 1);
            }
        };

        const getLimitOnView = (nodePosition) => {
            let totalHeight = rowsHeight[nodePosition];
            let i = 1;
            while (totalHeight < boxHeight && i < rowsHeight.length) {
                i++;
                totalHeight += rowsHeight[nodePosition + i];
            }
            return i;
        };

        const runScroller = async ({ target: { scrollTop } }) => {
            const nodePosition = findNodePosition(
                scrollTop,
                0,
                transforms.value.length
            );

            spacerTransformY.value = transforms.value[nodePosition];

            const limit = getLimitOnView(nodePosition);

            sources.value = getData(nodePosition, limit);

            if (totalHeight.value - scrollTop - boxHeight < 5) {
                sources.value = getData(nodePosition, limit + props.amount);
                await nextTick();
                getHeightOnSpacerChildren(nodePosition);
            }
        };

        const getHeightOnSpacerChildren = (start) => {
            const children = spacer.value.children;
            children &&
                Array.from(children).map((ele, eleIndex) => {
                    const { offsetHeight } = ele;
                    const itemIndex = eleIndex + start;
                    const oldHeight = rowsHeight[itemIndex];
                    if (oldHeight != offsetHeight) {
                        rowsHeight[itemIndex] = offsetHeight;
                        transforms.value[itemIndex] =
                            rowsHeight[itemIndex - 1] +
                            transforms.value[itemIndex - 1];
                    }
                });
        };

        sources.value = getData(0, props.amount);
        onMounted(() => getHeightOnSpacerChildren(0));

        return {
            runScroller,
            sources,
            spacer,
            spacerStyle,
            viewportStyle,
            boxStyle,
        };
    },
};
</script>
<style lang="scss">
.viewport {
    overflow: hidden;
}
.virtual-scroller {
    overflow-y: auto;
}
</style>
