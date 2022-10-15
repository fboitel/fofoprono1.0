import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').KitConfig} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
    preprocess({
      postcss: true,
    }),
  	],
  	csrf: {
		checkOrigin: false,
  	},

	kit: {
		adapter: adapter({
			fallback: 'index.html'
		})
	}
};

export default config;
