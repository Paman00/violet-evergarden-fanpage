/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'roboto': ['Roboto Slab', 'serif'],
			},
			backgroundImage: {
				'left-header': "url('/frameLeft.png')",
				'right-header': "url('/frameRight.png')",
			},
			colors: {
				'golden': "#b4832f",
			},
		},
	},
	plugins: [],
}
