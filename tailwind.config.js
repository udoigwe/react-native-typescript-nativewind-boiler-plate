/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: [
		"./App.tsx",
		"./app/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#2B58DA",
					200: "#1E42AD",
					300: "#0F2D82",
					400: "#001959",
					500: "#000034",
				},
			},
		},
	},
	plugins: [],
};
