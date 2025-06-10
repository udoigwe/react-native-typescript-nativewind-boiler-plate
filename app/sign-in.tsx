import CustomCheckbox from "@/components/CustomCheckBox";
import CustomGradientButton from "@/components/CustomGradientButton";
import KeyboardWrapper from "@/components/KeyboardWrapper";
import PasswordInput from "@/components/PasswordInput";
import { SIGN_IN_DEFAULT_FORM_DATA } from "@/constants/defaultFormData";
import { images } from "@/constants/images";
import { useAlert } from "@/context/AlertContext";
import { useLoading } from "@/context/LoadingContext";
import { useSignIn } from "@/hooks/queries/auth";
import { ISignInDTO } from "@/interfaces/dtos/auth.dto.interface";
import { setToken } from "@/utils/auth";
import { Link, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
	Image,
	ImageBackground,
	ScrollView,
	StatusBar,
	Text,
	TextInput,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignInScreen = () => {
	const { showLoading, hideLoading } = useLoading();
	const { showAlert } = useAlert();
	const router = useRouter();
	const [isChecked, setIsChecked] = useState(false);
	const [formData, setFormData] = useState<ISignInDTO>(
		SIGN_IN_DEFAULT_FORM_DATA
	);
	const { loginMutation, loggingIn } = useSignIn({
		onSuccess: (values) => {
			hideLoading();
			setToken(values.token as string);
			setTimeout(() => {
				router.push("/(tabs)/home");
			}, 1000);
		},
		onError: (message) => {
			hideLoading();
			showAlert("Attention", message, [
				{ text: "Cancel", style: "cancel" },
			]);
		},
	});
	const onSubmit = () => {
		loginMutation({ payload: formData });
	};

	useEffect(() => {
		if (loggingIn) {
			showLoading();
		}
	}, [loggingIn, showLoading]);

	return (
		<SafeAreaView className="h-full">
			<StatusBar className="bg-primary-100 text-white" />
			<ImageBackground source={images.HIGH_TENSION} resizeMode="cover">
				<ScrollView contentContainerStyle={{ height: "100%" }}>
					<KeyboardWrapper className="flex-1 w-full h-full justify-between items-center flex-col px-3 py-11">
						<Image source={images.LOGO} />
						<View className="gap-8 py-6 px-4 rounded-[12px] border border-[#FFD26040] bg-[#FFFFFF14] w-full">
							<View className="gap-1 justify-start items-start">
								<Text className="text-2xl text-white font-poppins">
									Log In
								</Text>
								<Text className="text-xs text-[#CCCCCC] tracking-tighter-[0.4%] font-poppins">
									Get started by logging in to your account
								</Text>
							</View>
							<View className="gap-6">
								<View className="gap-1">
									<Text className="font-poppins text-xxs uppercase text-white">
										Work Email
									</Text>
									<TextInput
										value={formData.username}
										onChangeText={(text) => {
											setFormData({
												...formData,
												username: text,
											});
										}}
										className="h-11 w-full rounded-[8px] border border-[#F0F0F0] py-2 px-3 bg-white text-sm"
										placeholder="xxxxx.xxxx"
										placeholderClassName="font-poppins text-sm text-[#999999]"
									/>
								</View>
								<View className="gap-1">
									<Text className="font-poppins text-xxs uppercase text-white">
										Password
									</Text>
									<PasswordInput
										value={formData.password}
										onChangeText={(text) => {
											setFormData({
												...formData,
												password: text,
											});
										}}
									/>
								</View>
							</View>
							<View className="flex-row justify-between items-center gap-6">
								<CustomCheckbox
									checked={isChecked}
									onChange={setIsChecked}
									checkedBackgroundColor="bg-[#1E83F0]"
									uncheckedBackgroundColor="bg-white"
									label="Remember Me"
								/>
								<Link
									href={"/history"}
									className="font-poppins text-xs text-[#1E83F0]"
								>
									Forgot Password
								</Link>
							</View>
							<CustomGradientButton
								title="Login"
								handlePress={onSubmit}
								textStyles="text-white font-medium font-poppins uppercase"
								containerStyles="w-full"
								gradientColors={["#2B58DA", "#000000"]}
								locations={[0, 0.8] as const}
							/>
							<View className="gap-2">
								<Text className="font-poppins text-xxs text-white text-center">
									By signing in, you agree with our{" "}
									<Text className="text-primary-100">
										terms
									</Text>{" "}
									and{" "}
									<Text className="text-primary-100">
										privacy policy
									</Text>
								</Text>
								{/* <Text className="font-poppins text-xxs text-white text-center">
									Version 1.0.9
								</Text> */}
							</View>
						</View>
					</KeyboardWrapper>
				</ScrollView>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default SignInScreen;
