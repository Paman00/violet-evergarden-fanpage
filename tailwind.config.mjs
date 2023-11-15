/** @type {import('tailwindcss').Config} */

const contentHeight = "44vh";

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'EBGaramond': ['EB Garamond', 'serif'], 
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
				'content-height': contentHeight,
			},
			minHeight: {
				'content-height': contentHeight,
			},
			maxHeight: {
				'content-height': contentHeight,
			},
		},
	},
	plugins: [],
}
