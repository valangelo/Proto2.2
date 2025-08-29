import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: [
				'/mnt/files/Dropbox/Proto2.1/src/lib',
				'/mnt/files/Dropbox/Proto2.1/src/routes',
				'/mnt/files/Dropbox/Proto2.1/.svelte-kit',
				'/mnt/files/Dropbox/Proto2.1/src',
				'/mnt/files/Dropbox/Proto2.1/node_modules',
				'/mnt/files/Dropbox/Proto2.1/static',
			],
		},
	},
});
