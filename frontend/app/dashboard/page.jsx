"use client";

import DashboardContent from "@/components/dashboard-content";
import { useFirebase } from "@/context/Firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
	const firebase = useFirebase();
	const router = useRouter();

	useEffect(() => {
		if (!firebase.isLoggedIn) {
			router.push("/login");
		}
	}, [firebase, router]);
	return <DashboardContent />;
}
