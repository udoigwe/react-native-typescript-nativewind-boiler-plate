import { useAlert } from "@/context/AlertContext";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
	const router = useRouter();
	const { logOut, loggedUser } = useAuth();
	const { showAlert } = useAlert();
	const onLogout = () => {
		showAlert("Warning", `Are you sure you want to log out?`, [
			{ text: "Cancel", style: "cancel" },
			{ text: "OK", onPress: logOut },
		]);
	};
	return (
		<View className="flex-1 items-center justify-center">
			<Text className="text-3xl font-medium">Home Screen</Text>
			<TouchableOpacity onPress={() => router.push("/alignment")}>
				<Text>Go To Alignment</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={onLogout}>
				<Text>Logout</Text>
			</TouchableOpacity>
		</View>
	);
}
