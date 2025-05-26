"use client";

import { useState, useEffect } from "react";
import VehiclesContent from "@/components/vehicles-content";
import { fetchAllVehicles } from "@/api/RequestMaker";
import { fetchUserVehicles } from "@/api/RequestMaker";
import { useFirebase } from "@/context/Firebase";
import { useRouter } from "next/navigation";
import Loading from "./loading";

export default function VehiclesPage() {
	const firebase = useFirebase();
	const router = useRouter();

	const [allVehicles, setAllVehicles] = useState([]);
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
				const all = await fetchAllVehicles();
				setAllVehicles(all);

				const details = firebase.profDetails();
				if (details) {
					console.log("details are: ", details);
					// setProfile(details);

					const vehicles = await fetchUserVehicles(details.id);
					setUserVehicles(vehicles);
				}
			} catch (error) {
				console.error("Error in fetching data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchAllData();
	}, [firebase]);

	if (loading) return <Loading />;

	return (
		<VehiclesContent allVehicles={allVehicles} userVehicles={userVehicles} />
	);
}
