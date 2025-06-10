import { AlertProvider } from "@/context/AlertContext";
import { LoadingProvider } from "@/context/LoadingContext";
import useAuth from "@/hooks/useAuth";
import useCustomFonts from "@/hooks/useCustomFonts";
import "@/styles/globals.css";
import "@/utils/splashConfig"; // Ensure splash prevention is globally applied
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

export default function RootLayout() {
	const queryClient = new QueryClient();
	const fontsLoaded = useCustomFonts();
	const { isLoggedIn } = useAuth();
	if (!fontsLoaded) return null; // Prevent rendering UI until fonts load

	return (
		<QueryClientProvider client={queryClient}>
			<AlertProvider>
				<LoadingProvider>
					<Stack
						screenOptions={{
							headerShown: false,
						}}
						initialRouteName={!isLoggedIn ? "sign-in" : "(tabs)"}
					/>
				</LoadingProvider>
			</AlertProvider>
		</QueryClientProvider>
	);
}
