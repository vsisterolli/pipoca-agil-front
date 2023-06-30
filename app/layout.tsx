import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import "./util/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Pipoca Ágil",
	description: "Seu podcast sobre a cultura ágil",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ToastContainer theme="dark" />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
