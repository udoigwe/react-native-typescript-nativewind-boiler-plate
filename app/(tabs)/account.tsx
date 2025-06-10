import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const AccountScreen = () => {
	const router = useRouter();
	return (
		<View className="flex-1 items-center justify-center">
			<Text className="text-3xl font-medium">Account Screen</Text>
			<TouchableOpacity onPress={() => router.push("/issues")}>
				<Text>Go To Issues</Text>
			</TouchableOpacity>
		</View>
	);
};

export default AccountScreen;
