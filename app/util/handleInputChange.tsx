export default function handleInputChangeBoilerPlate(
	event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	formValue: object,
	setFormValue: Function
): void {
	const { name, value }: { name: string; value: string } = event.target;
	setFormValue({
		...formValue,
		[name]: value,
	});
}
