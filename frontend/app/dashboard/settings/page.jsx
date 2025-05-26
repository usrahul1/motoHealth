"use client";

import SettingsContent from "@/components/settings-content";
import { useFirebase } from "@/context/Firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SettingsPage() {
	const router = useRouter();
	const firebase = useFirebase();

	useEffect(() => {
		if (!firebase.isLoggedIn) {
			router.push("/login");
		}
	}, [firebase, router]);

	return <SettingsContent />;
}
