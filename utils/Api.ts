import { getToken, isAuthenticated } from "@/utils/auth";
import axios, { InternalAxiosRequestConfig } from "axios";

const Api = axios.create({
	baseURL: process.env.EXPO_PUBLIC_MOBILE_WORKFORCE_API_BASE_URL,
});

Api.interceptors.request.use(
	async (config: InternalAxiosRequestConfig<any>) => {
		const authenticated = await isAuthenticated();
		if (authenticated) {
			const token = await getToken();
			config.headers["x-access-token"] = `${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

Api.interceptors.response.use(
	(response) => response,
	(error) => Promise.reject(error)
);

export default Api;
