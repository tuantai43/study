<template>
    <base-virtual-scroller :items="data" :amount="15" :item-height="20">
        <template #template="{ item }">
            <div class="item">
                {{ item.text }}
            </div>
        </template>
    </base-virtual-scroller>
</template>
<script>
export default {
    data() {
        return {
            data: [],
        };
    },
    created() {
        let i = 0;
        while (i < 150000) {
            this.data.push({ index: i, text: `item ${i}` });
            i++;
        }
    },
};
</script>
<style scoped>
.item {
    height: 20px;
}
</style>
