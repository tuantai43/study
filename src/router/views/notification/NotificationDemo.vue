<template>
    <input placeholder="Title" v-model="title" />
    <br />
    <input placeholder="Content" v-model="content" />
    <br />
    <input type="number" placeholder="Timer" v-model="timer" />
    <br />
    <select v-model="type">
        <option value="warning">warning</option>
        <option value="danger">danger</option>
    </select>
    <br />
    <button class="btn-primary btn" @click="send">Send Notification</button>
    <base-notification />
</template>
<script>
import { ref } from '@vue/reactivity';
import { notifyService } from '../../../services/notify-service';
export default {
    setup() {
        const title = ref('Title');
        const content = ref('Content');
        const timer = ref(200000);
        const type = ref('warning');

        const send = () => {
            notifyService.sendNotify(
                content.value,
                title.value,
                timer.value,
                type.value
            );
        };

        return {
            title,
            content,
            timer,
            type,
            send,
        };
    },
};
</script>
