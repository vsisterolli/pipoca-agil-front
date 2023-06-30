import styles from "./signUpFormStyle.module.scss";
import React, { ChangeEventHandler } from "react";
import { SignUpFormData } from "@/app/models/SignUpFormData";

export default function DateInput({
	formValue,
	handleChange,
}: {
	formValue: SignUpFormData;
	handleChange: ChangeEventHandler<HTMLInputElement>;
}) {
	const dateRef = React.useRef<HTMLInputElement | null>(null); // Updated type here
	const [dateColor, setDateColor] = React.useState("text-white");
	const [spanDisplay, setSpanDisplay] = React.useState("block");

	const handleFocus = () => {
		setSpanDisplay("hidden");
		setDateColor("text-primary");
	};

	const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		if (event.target.value === "") {
			setSpanDisplay("block");
			setDateColor("text-white");
		}
	};

	return (
		<div className="relative mb-4">
			<input
				min={"1930-01-01"}
				max={`${new Date().toISOString().split("T")[0]}`}
				type="date"
				id="date"
				ref={dateRef}
				className={`${styles.sign_up_input} ${dateColor}`}
				name="birth_date"
				value={formValue.birth_date as string}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onChange={handleChange}
			></input>
			<span
				id={styles.placeholder}
				onClick={() => (dateRef.current as HTMLInputElement).focus()}
				className={spanDisplay}
			>
				Data de nascimento
			</span>
			<img
				className="absolute top-[50%] -mt-[0.9rem] left-[1.35rem] h-[28px] z-[1]"
				src="./icon_calendar.svg"
			/>
		</div>
	);
}
