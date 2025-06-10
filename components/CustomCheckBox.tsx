import { CustomCheckboxProps } from "@/interfaces/general.interface";
import { cn } from "@/utils/clsx";
import React from "react";
import { Pressable, Text, View } from "react-native";

const CustomCheckbox = ({
	checked,
	onChange,
	label,
	labelClassName,
	className,
	uncheckedBackgroundColor,
	checkedBackgroundColor,
	checkmarkColor,
}: CustomCheckboxProps) => {
	return (
		<Pressable
			onPress={() => onChange(!checked)}
			className="flex-row items-center justify-center gap-3"
		>
			<View
				className={cn(
					"w-6 h-6 rounded-[6px] justify-center items-center border-2 border-[#1E83F0]",
					!checked && uncheckedBackgroundColor
						? uncheckedBackgroundColor
						: checked && checkedBackgroundColor
						? checkedBackgroundColor
						: "bg-transparent"
				)}
			>
				{checked && (
					<Text
						className={cn(
							"text-base",
							checkmarkColor ? checkmarkColor : "text-white"
						)}
					>
						✔
					</Text>
				)}
			</View>
			{label && (
				<Text
					className={cn(
						"font-poppins text-xs text-white",
						labelClassName
					)}
				>
					{label}
				</Text>
			)}
		</Pressable>
	);
};

export default CustomCheckbox;
