import { SafeAreaWrapperProps } from "@/interfaces/general.interface";
import React from "react";
import {
	ImageBackground,
	SafeAreaView,
	ScrollView,
	StatusBar,
} from "react-native";

const SafeAreaWrapper = ({
	children,
	scroll = false,
	imageBackground,
	statusBarStyle = "dark-content",
	statusBarBg = "transparent",
	statusBarClassName,
}: SafeAreaWrapperProps) => {
	const content = scroll ? (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			{children}
		</ScrollView>
	) : (
		children
	);

	const Wrapper = ({ children }: { children: React.ReactNode }) =>
		imageBackground ? (
			<ImageBackground
				source={imageBackground}
				style={{ flex: 1 }}
				resizeMode="cover"
			>
				{children}
			</ImageBackground>
		) : (
			<>{children}</>
		);

	return (
		<Wrapper>
			<StatusBar
				translucent
				backgroundColor={statusBarBg}
				barStyle={statusBarStyle}
				className={statusBarClassName}
			/>
			<SafeAreaView style={{ flex: 1 }}>{content}</SafeAreaView>
		</Wrapper>
	);
};

export default SafeAreaWrapper;
