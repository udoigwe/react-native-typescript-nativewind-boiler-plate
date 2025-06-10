// hooks/useRememberMe.ts
import { ISignInDTO } from "@/interfaces/dtos/auth.dto.interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export const useRememberMe = ({
	formData,
	setFormData,
}: {
	formData: ISignInDTO;
	setFormData: React.Dispatch<React.SetStateAction<ISignInDTO>>;
}) => {
	const [rememberMe, setRememberMe] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadCredentials = async () => {
			try {
				const storedUsername = await AsyncStorage.getItem(
					"remembered_username"
				);
				const storedPassword = await AsyncStorage.getItem(
					"remembered_password"
				);

				if (storedUsername && storedPassword) {
					setFormData({
						...formData,
						username: storedUsername,
						password: storedPassword,
					});
					setRememberMe(true);
				}
			} catch (error) {
				console.error("Error loading stored credentials:", error);
			} finally {
				setLoading(false);
			}
		};

		loadCredentials();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleRememberMeChange = () => {
		setRememberMe((prev) => !prev);
	};

	const handleRememberMeStorage = async (
		usernameValue: string,
		passwordValue: string
	) => {
		try {
			if (rememberMe) {
				await AsyncStorage.setItem(
					"remembered_username",
					usernameValue
				);
				await AsyncStorage.setItem(
					"remembered_password",
					passwordValue
				);
			} else {
				await AsyncStorage.removeItem("remembered_username");
				await AsyncStorage.removeItem("remembered_password");
			}
		} catch (error) {
			console.error("Error storing credentials:", error);
		}
	};

	return {
		rememberMe,
		setRememberMe,
		loading,
		handleRememberMeChange,
		handleRememberMeStorage,
	};
};
