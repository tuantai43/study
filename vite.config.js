import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    base: 'study',
    plugins: [vue()],
    build: {
        sourcemap: true,
    },
});
