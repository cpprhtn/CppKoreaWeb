import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// export default {
// 	plugins: [sveltekit()],
// 	server: {
// 	  fs: {
// 		strict: false,
// 	  },
// 	  proxy: {
// 		'/pkg': 'http://localhost:5000/pkg',
// 	  },
// 	},
//   };

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;


// export default defineConfig({
// 	plugins: [sveltekit()]
// });
