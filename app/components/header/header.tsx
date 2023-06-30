import styles from "./headerStyle.module.scss";
import Link from "next/link";

export default function Header() {
	const options: string[] = [
		"HOME",
		"BIO",
		"TOUR",
		"EPISÓDIOS",
		"BLOG",
		"PARCERIAS",
		"LIVROS",
		"CONTATOS",
	];
	return (
		<>
			<header className={`${styles.header} fixed w-full z-10`}>
				<div className="flex bg-primary items-center">
					<ul className="flex lg:ml-7 md:ml-2 items-center">
						<li>
							<img
								className={`${styles.logo} mr-7`}
								src="/logo-no-background.svg"
							></img>
						</li>
						{options.map((option) => (
							<Link
								href={
									option === "HOME"
										? "/"
										: `/${option.toLocaleLowerCase()}`
								}
							>
								<li
									className="mx-4 cursor-pointer font-extrabold lg:text-lg md:text-sm sm:text-xs font-sans text-white leading-5"
									key={option}
								>
									{option}
								</li>
							</Link>
						))}
					</ul>
					<div className="ml-auto lg:mr-7 md:mr-2">
						<button className="-ml-1 mr-6 text-secondary lg:text-lg md:text-sm sm:text-xs font-extrabold font-sans leading-5 ml-7">
							<Link href={"/login"}>LOGIN</Link>
						</button>
						<button className="lg:h-8 lg:w-36 lg:text-lg md:h-6 sm:w-28 md:text-sm sm:text-xs rounded-lg  font-extrabold font-sans bg-secondary leading-5">
							<Link href={"/sign-up"}>CADASTRE-SE</Link>
						</button>
					</div>
				</div>
				<div className="bg-secondary w-full h-[4px]"></div>
			</header>

			{/* Uma div para suportar o tamanho do header no início da pagina*/}
			<div aria-label="ghost-header" className="h-[70px] w-full" />
		</>
	);
}
