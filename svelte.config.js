import adapter from '@sveltejs/adapter-static';
const config = {
	compilerOptions: {
		runes: true
	},
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			precompress: false,
			strict: true
		}),
		paths: {
			relative: true
		}
	}
};

export default config;
