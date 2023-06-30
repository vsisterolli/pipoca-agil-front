import styles from "./footerStyle.module.scss";

export default function Footer() {
	return (
		<footer
			className={`${styles.footer} w-full flex items-center h-10 bg-secondary`}
		>
			<img src="./bigger-logo-nobackground.svg"></img>
			<div className="ml-auto flex mt-3">
				<img
					src="./icon_facebook.svg"
					className="cursor-pointer mr-3"
				/>
				<img
					src="./icon_instagram.svg"
					className="cursor-pointer mr-3"
				/>
				<img src="./icon_youtube.svg" className="cursor-pointer" />
			</div>
		</footer>
	);
}
