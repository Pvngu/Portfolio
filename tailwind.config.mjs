/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'cream-white': "#f2f2f2",
				'black-gray': "#222222"
			},
			fontFamily: {
				main: ["Poppins", 'sans-serif'],
				hero: ["Timmana", 'sans-serif']
			}
		},
	},
	plugins: [],
}
