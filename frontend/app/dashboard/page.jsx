"use client";

import DashboardContent from "@/components/dashboard-content";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFirebase } from "@/context/Firebase";
import {
	fetchUserVehicleCount,
	fetchUserVehicleDetails,
} from "@/api/RequestMaker";
import Loading from "./loading";

export default function DashboardPage() {
	const router = useRouter();
	const firebase = useFirebase();
	const [userVehiclesCount, setUserVehiclesCount] = useState(0);
	const [userVehicles, setUserVehicles] = useState([]);
	const [profile, setProfile] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!firebase.isLoggedIn) {
			router.push("/login");
		}
	}, [firebase, router]);

	useEffect(() => {
		const fetchAllData = async () => {
			setLoading(true);

			try {
				const details = firebase.profDetails();
				if (details) {
					setProfile(details);

					const [count, vehicles] = await Promise.all([
						fetchUserVehicleCount(details.id),
						fetchUserVehicleDetails(details.id),
					]);

					setUserVehiclesCount(count);
					setUserVehicles(vehicles);
				}
			} catch (error) {
				console.error("Error loading dashboard data:", error);
			} finally {
				setLoading(false);
			}
		};

		if (firebase?.isLoggedIn) {
			fetchAllData();
		}
	}, [firebase]);

	if (loading) return <Loading />;

	return (
		<DashboardContent
			profile={profile}
			userVehicles={userVehicles}
			userVehiclesCount={userVehiclesCount}
		/>
	);
}
