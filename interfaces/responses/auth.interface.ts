import { ISuccessResponse } from "@/interfaces/responses/general.interface";
import { IUserResponse } from "@/interfaces/responses/user.interface";

export type ISignInResponse = {
	user: IUserResponse;
	token: string;
} & ISuccessResponse;
