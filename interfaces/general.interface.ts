import { GestureResponderEvent, ImageSourcePropType } from "react-native";

/************** SAFE AREA WRAPPER PROPS *************/
export type SafeAreaWrapperProps = {
	children: React.ReactNode;
	scroll?: boolean;
	imageBackground?: ImageSourcePropType;
	statusBarStyle?: "light-content" | "dark-content";
	statusBarBg?: string; // For Android
	statusBarClassName?: string;
};

/************** CUSTOM CHECKBOX PROPS *************/
export type CustomCheckboxProps = {
	checked: boolean;
	onChange: (newValue: boolean) => void;
	onCheckedChange?: () => void;
	label?: string;
	labelClassName?: string;
	className?: string;
	checkedBackgroundColor?: string;
	uncheckedBackgroundColor?: string;
	checkmarkColor?: string;
};

/************** CUSTOM BUTTON PROPS *************/
export type CustomButtonProps = {
	title: string;
	handlePress: () => void;
	containerStyles?: string;
	textStyles?: string;
	isLoading?: boolean;
};

/************** CUSTOM GRADIENT BUTTON PROPS *************/
export type CustomGradientButtonProps = {
	title: string;
	handlePress: (event: GestureResponderEvent) => void;
	gradientColors: [string, string, ...string[]]; // ← Enforce at least 2 items
	locations?: readonly [number, number, ...number[]];
	gradientDirection?: {
		start: { x: number; y: number };
		end: { x: number; y: number };
	};
	containerStyles?: string;
	textStyles?: string;
	isLoading?: boolean;
};

/************************************* PARSE QUERY PARAMS  ***********************************/
export type ParseQueryParams = Record<
	string | symbol | number,
	string | string[] | boolean
>;
