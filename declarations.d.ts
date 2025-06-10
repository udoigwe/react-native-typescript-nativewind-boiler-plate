// For PNG images (React Native expects `number` type for image assets)
declare module "*.png" {
	const content: number;
	export default content;
}

// For JPG/JPEG images (same as PNG)
declare module "*.jpg" {
	const content: number;
	export default content;
}
declare module "*.jpeg" {
	const content: number;
	export default content;
}

// For SVGs (if you use react-native-svg-transformer to import SVGs as components)
declare module "*.svg" {
	import React from "react";
	import { SvgProps } from "react-native-svg";

	const content: React.FC<SvgProps>;
	export default content;
}
