<template>
    <div class="header-tutorial">
        <h1>{{ title }}</h1>
        <h3 v-if="description" v-html="description"></h3>
    </div>
    <div class="">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        description: String,
    },
};
</script>
<style lang="scss">
.header-tutorial {
    h3 {
        font-weight: normal;
    }
}
</style>
