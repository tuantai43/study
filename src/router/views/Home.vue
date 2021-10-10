<template>
    <div class="home-page">
        <the-header
            class="container"
            :hide-menu-icon="true"
            :transparent="true" />
        <div class="container page-body transparent">
            <h2 class="say-hi">Hello</h2>
            <router-link
                :to="{ name: 'VirtualScroller' }"
                class="btn btn-primary get-start">
                GET START
            </router-link>
        </div>
        <the-footer />
    </div>
</template>
<script setup></script>
