import { userActionTypes } from "./user.types";

export const SET_CURRENT_USER = (user) => ({
	type: userActionTypes.SET_CURRENT_USER,
	payload: user,
});