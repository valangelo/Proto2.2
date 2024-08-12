import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: sveltePreprocess({
        scss: {
            includePaths: ['src/styles'], // Adjust the path as necessary
        },
    }),

    kit: {
        adapter: adapter(),
    }
};

export default config;
