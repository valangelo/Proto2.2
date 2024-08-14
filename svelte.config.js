import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: sveltePreprocess({
        scss: {
            includePaths: ['src/styles'], // Adjust the path as necessary
            prependData:
                `
                @import 'src/styles/base/variables';
                @import 'src/styles/base/typography';
                @import 'src/styles/base/mixins';
                `
          },
    }),

    kit: {
        adapter: adapter(),
    }
};

export default config;
