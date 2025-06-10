import { ISignInResponse } from "../responses/auth.interface";

/****************************** SIGN IN DTO ******************************/
export interface ISignInDTO {
	username: string;
	password: string;
}

/****************************** SIGN PROPS DTO ******************************/
export interface UseSignInProps {
	onSuccess?: (_val: ISignInResponse) => void;
	onReset?: () => void;
	onError?: (message: string) => void;
}
