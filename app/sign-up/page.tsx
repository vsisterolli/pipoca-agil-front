import SignUpForm from "./components/signUpForm";
import styles from "./pageStyle.module.scss";

export default function SignUp() {
	return (
		<main className={`${styles.sign_up_main} flex`}>
			<aside className="bg-primary pt-[40px] hidden md:flex flex-col items-center w-[400px]">
				<img className="w-44" src="./bigger-logo-nobackground.svg" />
				<h2 className="mb-7 text-secondary font-extrabold font-sans text-4xl w-64">
					Bem-vindo de volta!
				</h2>
				<h3 className="text-white mb-7 font-medium text-xl w-64 font-sans">
					Acesse sua conta agora mesmo.
				</h3>
				<button className="text-secondary border-secondary border-[3px] rounded-3xl font-extrabold text-xl h-14 w-64">
					ENTRAR
				</button>
				<h3 className="text-white mb-12 mt-12 font-medium text-base font-sans">
					Esqueci minha senha
				</h3>
			</aside>
			<div
				className={`${styles.form_container} relative flex flex-col items-center justify-center bg-[url('/slashed.background.png')]`}
			>
				<h2 className="font-extrabold text-sans text-white text-sm md:text-xl lg:text-2xl mt-4">
					VENHA FAZER PARTE DO NOSSO
				</h2>
				<h1 className="text-secondary font-cursive text-3xl sm:text-5xl lg:text-7xl m-7">
					Clube de Assinantes
				</h1>
				<h2 className="font-extrabold text-sans text-white text-sm md:text-xl lg:text-2xl mb-7">
					PREENCHA SEUS DADOS
				</h2>
				<SignUpForm />
			</div>
		</main>
	);
}
