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

export default defineConfig({
	plugins: [sveltekit()]
});
