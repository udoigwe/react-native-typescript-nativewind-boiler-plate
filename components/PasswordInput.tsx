import { cn } from "@/utils/clsx";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const PasswordInput = ({
	value,
	onChangeText,
	inputStyles,
}: {
	value: string;
	onChangeText: (text: string) => void;
	inputStyles?: string;
}) => {
	const [isHidden, setIsHidden] = useState(true);

	return (
		<View className="relative w-full">
			<TextInput
				value={value}
				onChangeText={onChangeText}
				className={cn(
					"h-11 w-full rounded-[8px] border border-[#F0F0F0] py-2 px-3 bg-white text-sm",
					inputStyles
				)}
				placeholder="Enter your password"
				placeholderClassName="font-poppins text-sm text-[#999999]"
				secureTextEntry={isHidden}
			/>
			<TouchableOpacity
				onPress={() => setIsHidden(!isHidden)}
				className="absolute right-4 top-1/2 -translate-y-1/2"
			>
				<Icon
					name={isHidden ? "eye" : "eye-off"}
					size={20}
					color="#333"
				/>
			</TouchableOpacity>
		</View>
	);
};

export default PasswordInput;
