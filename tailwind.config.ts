import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				bebas : [ 'Bebas Neue' ],
				charis: [ 'Charis SIL' ],
				kade  : [ 'Kode Mono' ],
				pixel : [ 'Pixelify Sans' ],
			},
		},
	},
	plugins: [],
};
export default config;
