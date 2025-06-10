import { IUserResponse } from "@/interfaces/responses/user.interface";
import { getDecodedJwt, isAuthenticated, removeToken } from "@/utils/auth";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

const useAuth = () => {
	const router = useRouter();
	const [loggedUser, setLoggedUser] = useState<IUserResponse | null>(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [role, setRole] = useState<string | null>(null);
	const [loading, setLoading] = useState(true); // optional: to track auth loading

	useEffect(() => {
		const fetchAuthData = async () => {
			try {
				const user = await getDecodedJwt();
				const loggedIn = await isAuthenticated();
				setLoggedUser(user);
				setIsLoggedIn(loggedIn);
				setRole(user?.profile ?? null);
			} catch (error) {
				console.error("Error fetching auth data", error);
			} finally {
				setLoading(false);
			}
		};

		fetchAuthData();
	}, []);

	const logOut = () => {
		removeToken(router);
		setLoggedUser(null);
		setIsLoggedIn(false);
		setRole(null);
	};

	return {
		loggedUser,
		isLoggedIn,
		role,
		logOut,
		loading,
	};
};

export default useAuth;
