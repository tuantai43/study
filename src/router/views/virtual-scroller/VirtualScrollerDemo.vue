<template>
    <base-virtual-scroller :items="data" :amount="15" :item-height="24">
        <template #template="{ item }">
            <div class="item">
                {{ item.text }}
            </div>
        </template>
    </base-virtual-scroller>
</template>
<script setup>
import { ref } from '@vue/reactivity';

const props = defineProps({
    rows: {
        type: Number,
        default: 150000,
    },
});

const data = ref([]);
let i = 0;

while (i < props.rows) {
    // let text = `item ksand asjdn askjd akjdnakj daksdj akjdnask jdnasjajsdk ajsska jnsadj item ksand asjdn askjd akjdnakj daksdj akjdnask jdnasjajsdk ajsska jnsadj item ksand asjdn askjd akjdnakj daksdj akjdnask jdnasjajsdk ajsska jnsadj item ksand asjdn askjd akjdnakj daksdj akjdnask jdnasjajsdk ajsska jnsadj item ksand asjdn askjd akjdnakj daksdj akjdnask jdnasjajsdk ajsska jnsadjitem ksand asjdn askjd akjdnakj daksdj akjdnask jdnasjajsdk ajsska jnsadj item ksand asjdn askjd akjdnakj daksdj akjdnask jdnasjajsdk ajsska jnsadj item ksand asjdn askjd akjdnakj daksdj akjdnask jdnasjajsdk ajsska jnsadj${i}`;
    // if (i % 2 === 0) {
    //     text = `item ksand asjdn askjd akjdnakj daksdj akjdnask jdnasjajsdk ajsska jnsadj${i}`;
    // }
    const text = `item ${i}`;
    data.value.push({
        index: i,
        text,
    });
    i++;
}
</script>
<style scoped>
.item {
    min-height: 20px;
}
</style>
