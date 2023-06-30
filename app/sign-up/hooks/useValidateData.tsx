import {
	SignUpFormData,
	SignUpFormDataErrors,
	baseFormValue,
} from "@/app/models/SignUpFormData";

export default function useValidateData(signUpFormData: SignUpFormData) {
	const errors: SignUpFormDataErrors = {
		username: "",
		email: "",
		birth_date: "",
		password: "",
		type_of_audience: "",
	};
	let isValidData = true;

	// Checa se todos os campos estão preenchidos
	for (const field in signUpFormData) {
		const value = signUpFormData[field as keyof SignUpFormData];
		const fieldIsEmpty = value === "";
		if (fieldIsEmpty) {
			isValidData = false;
			errors[field as keyof SignUpFormDataErrors] =
				"Por favor, preencha este campo.";
		}
	}

	// Checa tamanho da senha
	if (signUpFormData.password.length < 8) {
		isValidData = false;
		errors.password = "Utilize uma senha de pelo menos 8 caracteres";
	}

	// Checa se o email é válido
	const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	const isInvalidEmail = !emailRegex.test(signUpFormData.email);
	if (isInvalidEmail) {
		isValidData = false;
		errors.email = "Insira um endereço de email válido.";
	}

	// Checa se é uma data entre 1900 ao ano atual
	signUpFormData.birth_date = new Date(signUpFormData.birth_date);
	const today = new Date();

	const isInvalidBirthdayDate =
		signUpFormData.birth_date.getFullYear() < 1900 ||
		signUpFormData.birth_date.getFullYear() > today.getFullYear();
	if (isInvalidBirthdayDate) {
		isValidData = false;
		errors.birth_date = "Insira uma data válida.";
	}

	// Caso contrário, vê se o usuario é menor de 18 anos
	else {
		const userIsUnderage =
			today.getFullYear() -
				(signUpFormData.birth_date as Date).getFullYear() <
			18;
		if (userIsUnderage) {
			errors.birth_date =
				"Você precisa ser maior de 18 anos para poder se cadastrar.";
			isValidData = false;
		}
	}

	// Checa se o tipo de usuario foi inserido corretamente
	const isInvalidTypeOfAudience =
		signUpFormData.type_of_audience != "MIG" &&
		signUpFormData.type_of_audience != "PRO" &&
		signUpFormData.type_of_audience != "CUR";
	if (isInvalidTypeOfAudience) {
		isValidData = false;
		errors.type_of_audience = "Escolha uma das opções.";
	}

	return { isValidData, errors };
}
