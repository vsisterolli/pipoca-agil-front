import styles from "./pageStyle.module.scss";

export default function Home() {
	return (
		<main>
			<div className="w-full bg-primary flex justify-center">
				<img
					src="./main_banner.svg"
					className="w-full max-w-screen-xl"
				/>
			</div>
			<div
				className={`${styles.main_banner} flex flex-wrap justify-around max-w-full bg-[url('/slashed.background.png')]`}
			>
				<div className={styles.placeholder_banner} />
				<div className={styles.placeholder_banner} />
				<div className={styles.placeholder_banner} />
			</div>
		</main>
	);
}
