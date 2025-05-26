"use client";

import { useState, useEffect } from "react";
import AnalyticsContent from "@/components/analytics-content";
import { fetchUserVehicleCount } from "@/api/RequestMaker";
import { fetchUserVehiclePrices } from "@/api/RequestMaker";
import { fetchUserElectricCount } from "@/api/RequestMaker";
import { useFirebase } from "@/context/Firebase";
import { fetchUserVehicleDetailsWithSpecs } from "@/api/RequestMaker";
import { useRouter } from "next/navigation";

import Loading from "./loading";

export default function AnalyticsPage() {
	const firebase = useFirebase();
	const [userVehiclesCount, setUserVehiclesCount] = useState(0);
	const [userElectricVehiclesCount, setElectricUserVehiclesCount] = useState(0);
	const [profile, setProfile] = useState(null);
	const [totalVehiclePrice, setTotalVehiclePrice] = useState(0);
	const [userVehicles, setUserVehicles] = useState([]);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		if (!firebase.isLoggedIn) {
			router.push("/login");
		}
	}, [firebase, router]);

	useEffect(() => {
		const fetchAllData = async () => {
			setLoading(true);
			try {
				// Get profile details
				const details = firebase.profDetails();
				if (details) {
					setProfile(details);

					// Fetch vehicles with specs
					const vehiclesData = await fetchUserVehicleDetailsWithSpecs(
						details.id
					);
					setUserVehicles(vehiclesData);

					// Fetch counts
					const count = await fetchUserVehicleCount(details.id);
					setUserVehiclesCount(count);

					const electricCount = await fetchUserElectricCount(details.id);
					setElectricUserVehiclesCount(electricCount);

					// Fetch total vehicle price
					const vehiclesPrices = await fetchUserVehiclePrices(details.id);
					const total = vehiclesPrices.reduce(
						(sum, v) => sum + (v.vehicle.price || 0),
						0
					);
					setTotalVehiclePrice(total);
				}
			} catch (error) {
				console.error("Error fetching user data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchAllData();
	}, [firebase]);

	if (loading) return <Loading />;

	return (
		<AnalyticsContent
			userVehiclesCount={userVehiclesCount}
			userElectricVehiclesCount={userElectricVehiclesCount}
			profile={profile}
			totalVehiclePrice={totalVehiclePrice}
			userVehicles={userVehicles}
		/>
	);
}
