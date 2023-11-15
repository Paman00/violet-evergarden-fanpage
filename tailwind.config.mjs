/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'roboto': ['Roboto Slab', 'serif'],
			},
			backgroundImage: {
				'left-top-header': "url('/frameTopLeft.png')",
				'right-top-header': "url('/frameTopRight.png')",
				'left-bottom-header': "url('/frameBottomLeft.png')",
				'right-bottom-header': "url('/frameBottomRight.png')",
			},
			colors: {
				'golden': "#b4832f",
			},
			spacing: {
				'content-heigh': "75vh",
			}
		},
	},
	plugins: [],
}
