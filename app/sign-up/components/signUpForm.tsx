"use client";
import { SignUpFormData, baseFormValue } from "@/app/models/SignUpFormData";

import signUpServices from "@/app/services/sign-up";
import useValidateData from "../hooks/useValidateData";
import handleInputChangeBoilerPlate from "@/app/util/handleInputChange";

import { toast } from "react-toastify";
import React from "react";

import DateInput from "./dateInput";
import ErrorMessageContainer from "./errorMessageContainer";
import TextInput from "./textInput";
import SelectInput from "./selectInput";

export default function SignUpForm() {
	const [loading, setLoading] = React.useState(false);
	const [formValue, setFormValue] = React.useState({
		...baseFormValue,
		type_of_audience: "MIG",
	});
	const [formErrors, setFormErrors] = React.useState(baseFormValue);

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => handleInputChangeBoilerPlate(event, formValue, setFormValue);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { isValidData, errors } = useValidateData(formValue);
		if (isValidData) {
			setLoading(true);
			try {
				await signUpServices.registerUser(formValue);
				toast.success("Usuário cadastrado com sucesso!");
				setFormErrors(baseFormValue);
				setLoading(false);
			} catch (errorInUserFormFill) {
				toast.error(
					"Cadastro não realizado, atente-se aos erros do formulário"
				);
				setFormErrors(errorInUserFormFill as SignUpFormData);
				setLoading(false);
			}
		} else {
			toast.error(
				"Cadastro não realizado, atente-se aos erros do formulário"
			);
			setFormErrors(errors);
		}
	};

	return (
		<form className="flex flex-col" onSubmit={handleSubmit}>
			<TextInput
				name="username"
				placeholder="Nome"
				type="text"
				formValue={formValue}
				handleChange={handleChange}
			/>
			<ErrorMessageContainer>{formErrors.username}</ErrorMessageContainer>

			<DateInput formValue={formValue} handleChange={handleChange} />
			<ErrorMessageContainer>
				{formErrors.birth_date as string}
			</ErrorMessageContainer>

			<TextInput
				name="email"
				placeholder="Email"
				type="email"
				formValue={formValue}
				handleChange={handleChange}
			/>
			<ErrorMessageContainer>{formErrors.email}</ErrorMessageContainer>

			<TextInput
				name="password"
				placeholder="Senha"
				type="password"
				formValue={formValue}
				handleChange={handleChange}
			/>
			<ErrorMessageContainer>{formErrors.password}</ErrorMessageContainer>

			<SelectInput formValue={formValue} handleChange={handleChange} />
			<ErrorMessageContainer>
				{formErrors.type_of_audience}
			</ErrorMessageContainer>

			<input
				type="submit"
				value="CADASTRAR"
				className="bg-secondary cursor-pointer self-center text-3xl font-sans rounded-3xl font-extrabold h-16 w-96 m-4"
			></input>
		</form>
	);
}
