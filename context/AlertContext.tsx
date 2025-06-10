// AlertContext.tsx
import {
	AlertContextProps,
	AlertContextType,
} from "@/interfaces/context.interface";
import React, { createContext, useContext } from "react";
import { Alert } from "react-native";

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider = ({ children }: AlertContextProps) => {
	const showAlert: AlertContextType["showAlert"] = (
		title,
		message,
		buttons,
		options
	) => {
		Alert.alert(title, message, buttons, options);
	};

	return (
		<AlertContext.Provider value={{ showAlert }}>
			{children}
		</AlertContext.Provider>
	);
};

export const useAlert = (): AlertContextType => {
	const context = useContext(AlertContext);
	if (!context) {
		throw new Error("useAlert must be used within an AlertProvider");
	}
	return context;
};
