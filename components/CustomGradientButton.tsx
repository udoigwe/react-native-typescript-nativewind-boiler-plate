import { CustomGradientButtonProps } from "@/interfaces/general.interface";
import { cn } from "@/utils/clsx";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomGradientButton = ({
	title,
	handlePress,
	gradientColors,
	locations = [0, 1],
	gradientDirection = { start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 } },
	containerStyles = "px-6 py-3 rounded-lg",
	textStyles = "text-white text-center font-semibold text-base",
	isLoading = false,
}: CustomGradientButtonProps) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			activeOpacity={0.8}
			disabled={isLoading}
			className={cn("items-center justify-center w-full ")}
		>
			<LinearGradient
				colors={gradientColors}
				locations={locations}
				start={gradientDirection.start}
				end={gradientDirection.end}
				className={cn(
					"rounded-[360px] overflow-hidden border border-[#009EE370] w-full h-[52px] items-center justify-center"
				)}
			>
				<Text className={textStyles}>{title}</Text>
			</LinearGradient>
		</TouchableOpacity>
	);
};

export default CustomGradientButton;
