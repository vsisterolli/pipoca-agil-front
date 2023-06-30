/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "508px",
			md: "980px",
			lg: "1186px",
			xl: "1440px",
		},
		colors: {
			secondary: "#FECF5D",
			primary: "#000000",
			white: "#FFFFFF",
			lightgray: "#D3D3D3",
			error: "#cc0000",
		},
		fontFamily: {
			sans: ["Raleway", "Helvetica", "Arial", "sans-serif"],
			cursive: ["amuba", "cursive"],
		},
		extend: {
			spacing: {
				128: "32rem",
				144: "36rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
		},
	},
	plugins: [],
};
