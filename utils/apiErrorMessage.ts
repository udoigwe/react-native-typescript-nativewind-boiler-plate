import { IErrorResponse } from "@/interfaces/responses/general.interface";
import { AxiosError, isAxiosError } from "axios";

const handleAPIError = (error: unknown) => {
	if (isAxiosError(error)) {
		//error is of type AxiosError
		const axiosError = error as AxiosError;

		if (axiosError.response) {
			const serverErrorResponse = axiosError.response
				.data as IErrorResponse;

			return serverErrorResponse.message;
		} else {
			//non-server error occured
			return axiosError.message;
		}
	} else {
		//unexpected error
		return (error as Error).message;
	}
};

export default handleAPIError;
