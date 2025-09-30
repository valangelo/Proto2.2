// svelte.config.js
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    scss: {
      prependData: `
        @import 'src/lib/styles/base/_variables.scss';
        @import 'src/lib/styles/base/_typography.scss';
        @import 'src/lib/styles/base/_mixins.scss';
      `
    }
  }),
  kit: {
    adapter: adapter(),
    alias: {
      $lib: './src/lib'
    }
  }
};

export default config;
