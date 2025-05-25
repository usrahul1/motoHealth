"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { FirebaseProvider } from "../context/Firebase";
import { Toaster } from "react-hot-toast";
import { useThemeStore } from "@/store/useThemeStore";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
// 	title: "Vehicle Maintenance Dashboard",
// 	description: "Track and manage your vehicle maintenance",
// };

export default function RootLayout({ children }) {
	const { theme } = useThemeStore();

	return (
		<html data-theme={theme} lang="en">
			<body className={inter.className}>
				<FirebaseProvider>
					<main>{children}</main>
				</FirebaseProvider>
				<Toaster />
			</body>
		</html>
	);
}
