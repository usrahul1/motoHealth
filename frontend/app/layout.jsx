import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
// import { Toaster } from "@/components/ui/toaster";
import { FirebaseProvider } from "../context/Firebase";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Vehicle Maintenance Dashboard",
	description: "Track and manage your vehicle maintenance",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<FirebaseProvider>
					<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
						<main>{children}</main>
					</ThemeProvider>
				</FirebaseProvider>
				<Toaster />
			</body>
		</html>
	);
}
