/** @type {import('tailwindcss').Config} */

const contentHeight = '44vh';

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                EBGaramond: ['EB Garamond', 'serif'],
            },
            backgroundImage: {
                'left-top-header': "url('/frameTopLeft.png')",
                'right-top-header': "url('/frameTopRight.png')",
                'left-bottom-header': "url('/frameBottomLeft.png')",
                'right-bottom-header': "url('/frameBottomRight.png')",
            },
            colors: {
                golden: {
                    DEFAULT: '#b4832f',
                    light: '#b49258',
                },
                beige: {
                    DEFAULT: '#efebd9',
                    gray: '#e1e1e1',
                    light: '#f5f5dc'
                },
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
    plugins: [
        function ({ addComponents, theme }) {
            addComponents({
                '.scrollbar-golden': {
                    '&*': {
                        position: 'absolute',
                        bottom: '0',
                    },
                    '&::-webkit-scrollbar': {
                        height: '7px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: theme('colors.golden.light'),
                        borderRadius: '4px'
                    },
                    '&::-webkit-scrollbar-thumb:active': {
                        backgroundColor: theme('colors.golden.DEFAULT'),
                    
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        display: 'block',
                        backgroundColor: theme('colors.golden.DEFAULT'),
                        shadow: theme('boxShadow.sm'),
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: theme('colors.beige.gray'),
                        borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-track:hover': {
                        backgroundColor: theme('colors.beige.DEFAULT'),
                        shadow: theme('boxShadow.sm'),
                    },
                    '&::-webkit-scrollbar-track:active': {
                        backgroundColor: theme('colors.beige.DEFAULT'),
                        shadow: theme('boxShadow.sm'),
                    },
                    '&:hover': {
                        '&::-webkit-scrollbar-track': {
                            display: 'block',
                        },
                    },
                    '&:active': {
                        '&::-webkit-scrollbar-track': {
                            display: 'block',
                        },
                    }
                },
            })
        }
    ],
};
