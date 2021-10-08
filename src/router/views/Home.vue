<template>
    <div class="container transparent">
        <the-header :hide-menu-icon="true" :transparent="true" />
        <div class="home-page page-body">
            <p class="say-hi">Hello</p>
            <router-link
                to="virtual-scroller"
                class="btn btn-primary get-start">
                GET START
            </router-link>
        </div>
    </div>
    <the-footer />
</template>
<script setup></script>
