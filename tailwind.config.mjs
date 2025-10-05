/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}",
		"./content/**/*.md",
	],
	theme: {
		extend: {
			colors: {
				oxblue: "#0b4da2",
				oxgray: "#f8f9fa",
				oxgold: "#c7a44d",
			},
			fontFamily: {
				serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
				sans: ["'Segoe UI'", "Inter", "Helvetica Neue", "sans-serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
