import { ReactNode } from "react";

export default function ErrorMessageContainer({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<h2 className="max-w-[400px] md:max-w-fit text-error font-sans font-medium text-xl -mt-1.5 mb-4">
			{children}
		</h2>
	);
}
