// svelte.config.js

import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: sveltePreprocess({
        scss: {
            includePaths: ['src/styles'], 
            prependData:
                `
                @import 'base/variables';
                @import 'base/typography';
                @import 'base/mixins';
                `
        },
    }),

    kit: {
        adapter: adapter(),
    }
};

export default config;
