import {
	ISignInDTO,
	UseSignInProps,
} from "@/interfaces/dtos/auth.dto.interface";
import { ISignInResponse } from "@/interfaces/responses/auth.interface";
import { postRequest } from "@/utils/apiCaller";
import handleAPIError from "@/utils/apiErrorMessage";
import { useMutation } from "@tanstack/react-query";
import { Alert } from "react-native";

export const useSignIn = (props: UseSignInProps) => {
	const { onSuccess, onError } = props;

	const { mutate, isLoading, ...rest } = useMutation(
		({ payload }: { payload: ISignInDTO }) =>
			postRequest<ISignInDTO, ISignInResponse>({
				url: "/signin",
				payload,
			}),
		{
			onSuccess: (values) => {
				if (onSuccess) {
					onSuccess(values);
					Alert.alert("Success", values.message);
				}
			},
			onError: (error: unknown) => {
				if (onError) {
					rest.reset();
					onError(handleAPIError(error));
				}
			},
		}
	);

	return {
		loginMutation: mutate,
		loggingIn: isLoading,
		...rest,
	};
};
