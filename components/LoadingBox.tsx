import React from "react";
import { ActivityIndicator, Modal, StyleSheet, Text, View } from "react-native";

type LoadingBoxProps = {
	visible: boolean;
	message?: string;
};

export default function LoadingBox({
	visible,
	message = "Please Wait...",
}: LoadingBoxProps) {
	return (
		<Modal transparent animationType="fade" visible={visible}>
			<View style={styles.overlay}>
				<View style={styles.box}>
					<ActivityIndicator size="large" color="#007AFF" />
					<Text style={styles.message}>{message}</Text>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: "rgba(0,0,0,0.3)",
		justifyContent: "center",
		alignItems: "center",
	},
	box: {
		width: 200,
		padding: 20,
		backgroundColor: "white",
		borderRadius: 10,
		alignItems: "center",
		elevation: 5, // For Android
		shadowColor: "#000", // For iOS
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 5,
	},
	message: {
		marginTop: 10,
		fontSize: 12,
		color: "#333",
		fontFamily: "Poppins-Regular",
	},
});
