import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
plugins: [sveltekit()],
css: {
    preprocessorOptions: {
        scss: {
            additionalData: `
                @import '$lib/styles/base/_variables.scss';
                @import '$lib/styles/base/_typography.scss';
                @import '$lib/styles/base/_mixins.scss';
            `
        }
    }
}
});