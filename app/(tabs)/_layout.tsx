import { Tabs } from "expo-router";
import React from "react";

const _Layout = () => {
	return (
		<Tabs>
			<Tabs.Screen
				name="home"
				options={{ title: "Home", headerShown: false }}
			/>
			<Tabs.Screen
				name="account"
				options={{ title: "Account", headerShown: false }}
			/>
		</Tabs>
	);
};

export default _Layout;
