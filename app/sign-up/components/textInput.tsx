import { ChangeEventHandler } from "react";
import { SignUpFormData } from "@/app/models/SignUpFormData";
import styles from "./signUpFormStyle.module.scss";

type ImageData = {
	className: string;
	src: string;
};

type ImageDataContainer = {
	username: ImageData;
	email: ImageData;
	password: ImageData;
};

export default function TextInput({
	type,
	formValue,
	name,
	handleChange,
	placeholder,
}: {
	type: string;
	formValue: SignUpFormData;
	name: string;
	handleChange: ChangeEventHandler<HTMLInputElement>;
	placeholder: string;
}) {
	const images: ImageDataContainer = {
		username: {
			className:
				"absolute top-[50%] -mt-[0.9rem] left-[1.3rem] h-[28px] z-[1]",
			src: "./icon_profile_circled.svg",
		},
		email: {
			className:
				"absolute top-[50%] -mt-[0.7rem] left-[1.25rem] h-[22px] z-[1]",
			src: "./icon_mail.svg",
		},
		password: {
			className:
				"absolute top-[50%] -mt-[0.7rem] left-[1rem] h-[18px] z-[1]",
			src: "./icon_key.svg",
		},
	};
	return (
		<div className="relative mb-4">
			<input
				type={type}
				className={styles.sign_up_input}
				placeholder={placeholder}
				name={name}
				value={formValue[name as keyof SignUpFormData] as string}
				onChange={handleChange}
			/>
			<img className={images[name as keyof ImageDataContainer].className} src={images[name as keyof ImageDataContainer].src} />
		</div>
	);
}
