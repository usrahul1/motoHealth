// import { create } from "zustand";

// const getInitialTheme = () => {
// 	if (typeof window !== "undefined") {
// 		return localStorage.getItem("chat-theme") || "light";
// 	}
// 	return "light"; // fallback during SSR
// };

// export const useThemeStore = create((set) => ({
// 	theme: getInitialTheme(),
// 	setTheme: (theme) => {
// 		if (typeof window !== "undefined") {
// 			localStorage.setItem("chat-theme", theme);
// 		}
// 		set({ theme });
// 	},
// }));

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
	persist(
		(set) => ({
			theme: "light",
			setTheme: (theme) => set({ theme }),
		}),
		{
			name: "chat-theme", // key in localStorage
		}
	)
);
