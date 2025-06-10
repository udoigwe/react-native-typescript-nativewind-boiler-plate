import { IUserResponse } from "@/interfaces/responses/user.interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

// Manual JWT Decode Function
const decodeJWT = (token: string): IUserResponse => {
	try {
		const base64Url = token.split(".")[1];
		const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
		return JSON.parse(atob(base64));
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (error) {
		return {} as IUserResponse;
	}
};

// Store Access Token
export async function setToken(token: string): Promise<void> {
	await AsyncStorage.setItem("accessToken", token);
}

// Store Refresh Token
export async function setRefreshToken(token: string): Promise<void> {
	await AsyncStorage.setItem("refreshToken", token);
}

// Retrieve Access Token
export async function getToken(): Promise<string | null> {
	return await AsyncStorage.getItem("accessToken");
}

// Retrieve Refresh Token
export async function getRefreshToken(): Promise<string | null> {
	return await AsyncStorage.getItem("refreshToken");
}

// Decode JWT from AsyncStorage
export async function getDecodedJwt(tkn?: string): Promise<IUserResponse> {
	try {
		const token = tkn || (await getToken());
		if (!token) return {} as IUserResponse;

		return decodeJWT(token);
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (error) {
		return {} as IUserResponse;
	}
}

// Check if User is Authenticated
export async function isAuthenticated(): Promise<boolean> {
	try {
		const decodedToken = await getDecodedJwt();
		if (decodedToken?.exp) {
			const currentTime = Date.now() / 1000;
			return decodedToken.exp > currentTime;
		}
		return false;
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (error) {
		return false;
	}
}

// Remove Token & Clear Storage
export async function removeToken(
	router?: ReturnType<typeof useRouter>
): Promise<void> {
	await AsyncStorage.removeItem("accessToken");
	await AsyncStorage.removeItem("refreshToken");

	if (router) {
		router.replace("/sign-in"); // Navigate to login after logout
	}
}

// Export the Auth Helper
const Auth = {
	setToken,
	setRefreshToken,
	getToken,
	getRefreshToken,
	getDecodedJwt,
	isAuthenticated,
	removeToken,
};

export default Auth;
