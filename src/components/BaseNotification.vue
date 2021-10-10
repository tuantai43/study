<template>
    <div class="notifications">
        <base-notification-item
            v-for="item in notificationsActive"
            :key="`notification-item-${item.index}`"
            :index="item.index"
            :content="item.content"
            :title="item.title"
            :timer="item.timer"
            :type="item.type"
            @clear-item="clearItem" />
    </div>
</template>
<script>
import { computed, ref } from '@vue/reactivity';
import { notifyService } from '../services/notify-service';
import { defineAsyncComponent, onBeforeUnmount } from '@vue/runtime-core';

export default {
    components: {
        BaseNotificationItem: defineAsyncComponent(() =>
            import('./BaseNotificationItem.vue')
        ),
    },
    setup() {
        const notifications = ref([]);
        const notificationsDeactive = ref([]);

        const subscription = notifyService.getNotify().subscribe((notify) => {
            if (notify) {
                notifications.value.push({
                    ...notify,
                    index: notifications.value.length,
                });
            }
        });

        const notificationsActive = computed(() =>
            notifications.value.filter(
                (item) => !notificationsDeactive.value.includes(item.index)
            )
        );

        const clearItem = (index) => {
            notificationsDeactive.value.push(index);
        };

        onBeforeUnmount(() => {
            subscription.unsubscribe();
        });

        return {
            notificationsActive,
            clearItem,
        };
    },
};
</script>
