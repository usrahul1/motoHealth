"use client";

import ProfilePage from "@/components/profile-page";
import { fetchUserVehicleCount } from "@/api/RequestMaker";
import { fetchUserVehicleDetails } from "@/api/RequestMaker";
import { useFirebase } from "@/context/Firebase";
import avatar from "../../../public/images/profile-avatar.jpg";
import { useState, useEffect } from "react";
import Loading from "./loading";
import { useRouter } from "next/navigation";

export default function Profile() {
	const router = useRouter();
	const firebase = useFirebase();

	const [loading, setLoading] = useState(true);
	const [profile, setProfile] = useState(null);
	const [name, setName] = useState("");
	const [profilePic, setProfilePic] = useState(null);
	const [userVehicles, setUserVehicles] = useState([]);
	const [userVehiclesCount, setUserVehiclesCount] = useState(0);
	const [phone, setPhone] = useState("");
	const [gender, setGender] = useState("");

	useEffect(() => {
		if (!firebase.isLoggedIn) {
			router.push("/login");
		}
	}, [firebase, router]);

	useEffect(() => {
		const fetchProfileData = async () => {
			setLoading(true);
			const details = firebase.profDetails();
			if (details) {
				console.log("details are: ", details);
				setProfile(details);
				setName(details.name || "");
				if (details.photoURL) {
					setProfilePic(details.photoURL);
				}
				try {
					const [count, vehicles] = await Promise.all([
						fetchUserVehicleCount(details.id),
						fetchUserVehicleDetails(details.id),
					]);
					setUserVehiclesCount(count);
					setUserVehicles(vehicles);
				} catch (error) {
					console.error("Error fetching vehicle data:", error);
				}

				try {
					const firestoreDetails = await firebase.fetchUserDetails();

					if (firestoreDetails) {
						if (firestoreDetails.gender) {
							setGender(firestoreDetails.gender);
						}
						if (firestoreDetails.phone || firestoreDetails.number) {
							setPhone(firestoreDetails.phone || firestoreDetails.number);
						}
					}
				} catch (error) {
					console.error("Error fetching Firestore user details:", error);
				} finally {
					setLoading(false);
				}
			} else {
				setLoading(false);
			}
		};

		fetchProfileData();
	}, []);

	if (loading) return <Loading />;

	return (
		<ProfilePage
			profile={profile}
			userVehicles={userVehicles}
			userVehiclesCount={userVehiclesCount}
			name={name}
			profilePic={profilePic}
			phone={phone}
			gender={gender}
		/>
	);
}
