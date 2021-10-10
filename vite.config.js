import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    base: '/study/',
    plugins: [vue()],
    build: {
        sourcemap: false,
    },
});
