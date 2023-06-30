import { AxiosError } from "axios";
import { SignUpFormData, baseFormValue } from "../models/SignUpFormData";
import instance from "./api";

const registerUser = async (formValue: SignUpFormData) => {
	const payload = {
		...formValue,
		birth_date: new Date(formValue.birth_date).toISOString().split("T")[0],
	};
	try {
		await instance.post("/users/", payload);
	} catch (error) {
		const newError = { ...baseFormValue };
		if (error instanceof AxiosError && error.response && error.response.data) {
			for (const [key, value] of Object.entries(error.response.data)) {
				newError[key as keyof SignUpFormData] = (value as string[])[0];
			}
		}		
		throw newError;
	}
};

const signUpServices = {
	registerUser,
};

export default signUpServices;
