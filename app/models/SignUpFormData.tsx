export interface SignUpFormData {
	username: string;
	email: string;
	birth_date: string | Date;
	password: string;
	type_of_audience: string;
}

export interface SignUpFormDataErrors extends SignUpFormData {
	birth_date: string;
}

export const baseFormValue: SignUpFormData = {
	username: "",
	birth_date: "",
	email: "",
	password: "",
	type_of_audience: "",
};
