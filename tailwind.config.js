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
			fontFamily: {
				sans: ["Poppins-Regular", "sans-serif"],
				"poppins-thin": ["Poppins-Thin"],
				"poppins-thin-italic": ["Poppins-ThinItalic"],
				"poppins-extralight": ["Poppins-ExtraLight"],
				"poppins-extralight-italic": ["Poppins-ExtraLightItalic"],
				"poppins-light": ["Poppins-Light"],
				"poppins-light-italic": ["Poppins-LightItalic"],
				poppins: ["Poppins-Regular"],
				"poppins-italic": ["Poppins-Italic"],
				"poppins-medium": ["Poppins-Medium"],
				"poppins-medium-italic": ["Poppins-MediumItalic"],
				"poppins-semibold": ["Poppins-SemiBold"],
				"poppins-semibold-italic": ["Poppins-SemiBoldItalic"],
				"poppins-bold": ["Poppins-Bold"],
				"poppins-bold-italic": ["Poppins-BoldItalic"],
				"poppins-extrabold": ["Poppins-ExtraBold"],
				"poppins-extrabold-italic": ["Poppins-ExtraBoldItalic"],
				"poppins-black": ["Poppins-Black"],
				"poppins-black-italic": ["Poppins-BlackItalic"],
			},
			fontSize: {
				xxs: "0.625rem", // 10px
			},
		},
	},
	plugins: [],
};
