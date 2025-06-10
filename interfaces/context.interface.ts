/****************************** LOADING CONTEXTS ******************************/
export interface LoadingContextProps {
	children: React.ReactNode;
}

export interface LoadingContextType {
	isLoading: boolean;
	showLoading: () => void;
	hideLoading: () => void;
}

/****************************** ALERT CONTEXTS ******************************/
export interface AlertContextProps {
	children: React.ReactNode;
}

export type AlertContextType = {
	showAlert: (
		title: string,
		message: string,
		buttons?: {
			text: string;
			onPress?: () => void;
			style?: "default" | "cancel" | "destructive";
		}[],
		options?: { cancelable?: boolean }
	) => void;
};
