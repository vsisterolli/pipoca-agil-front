import { ChangeEventHandler } from "react";
import { SignUpFormData } from "@/app/models/SignUpFormData";
import styles from "./signUpFormStyle.module.scss";

export default function SelectInput({
	formValue,
	handleChange,
}: {
	formValue: SignUpFormData;
	handleChange: ChangeEventHandler<HTMLSelectElement>;
}) {
	return (
		<div className="relative mb-4">
			<img
				className="absolute top-[50%] -mt-[1rem] left-[1.3rem] h-[28px] z-[1]"
				src="./icon_search.svg"
			/>
			<select
				name="type_of_audience"
				className={styles.sign_up_input}
				value={formValue.type_of_audience}
				onChange={handleChange}
			>
				<option value="MIG">Migrando para a área de agilidade</option>
				<option value="PRO">Profissional da área de agilidade</option>
				<option value="CUR">Curioso sobre o mundo da agilidade</option>
			</select>
		</div>
	);
}
