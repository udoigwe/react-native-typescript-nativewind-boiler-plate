import { CustomButtonProps } from "@/interfaces/general.interface";
import { cn } from "@/utils/clsx";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({
	title,
	handlePress,
	containerStyles,
	textStyles,
	isLoading,
}: CustomButtonProps) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			activeOpacity={0.7}
			disabled={isLoading}
			className={cn(
				"items-center justify-center w-full h-[52px] rounded-[360px] border border-[#009EE370] p-[10px] bg-gradient-to-b from-[#2B58DA] to-[#000000]",
				containerStyles
			)}
		>
			<Text
				className={cn(
					"font-poppins font-medium text-sm uppercase",
					textStyles
				)}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
