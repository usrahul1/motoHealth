"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { useToast } from "@/components/ui/use-toast";
import { toast } from "react-hot-toast";
import VehicleCard from "./vehicle-card";
import { useRouter } from "next/navigation";
import { useFirebase } from "@/context/Firebase";
import avatar from "../public/images/profile-avatar.jpg";
import { fetchUserVehicleCount } from "@/api/RequestMaker";
import { fetchUserVehicleDetails } from "@/api/RequestMaker";

const vehicles = [
	{
		id: 1,
		make: "Tesla",
		model: "Model 3",
		year: 2023,
		image: "/images/tesla-model3.jpg",
		status: "Excellent",
		lastService: "2023-04-15",
		mileage: 12500,
		fuelLevel: 90,
		batteryHealth: 95,
	},
	{
		id: 2,
		make: "Toyota",
		model: "Camry",
		year: 2022,
		image: "/images/toyota-camry.jpg",
		status: "Good",
		lastService: "2023-02-10",
		mileage: 18700,
		fuelLevel: 65,
		batteryHealth: 88,
	},
	{
		id: 3,
		make: "BMW",
		model: "X5",
		year: 2021,
		image: "/images/bmw-x5.jpg",
		status: "Good",
		lastService: "2023-01-05",
		mileage: 25400,
		fuelLevel: 45,
		batteryHealth: 82,
	},
];

export default function ProfilePage() {
	const firebase = useFirebase();
	const [profilePic, setProfilePic] = useState(avatar);
	const [profile, setProfile] = useState(null);
	const router = useRouter();
	const [name, setName] = useState("");
	const [userVehiclesCount, setUserVehiclesCount] = useState(0);
	const [userVehicles, setUserVehicles] = useState([]);

	useEffect(() => {
		const details = firebase.profDetails();
		if (details) {
			console.log("details are: ", details);
			setProfile(details);
			setName(details?.name);
			if (details.photoURL != null) setProfilePic(details.photoURL);
		}
	}, [firebase]);

	useEffect(() => {
		const getUserVehicleCount = async () => {
			if (profile?.id) {
				try {
					const count = await fetchUserVehicleCount(profile.id);
					setUserVehiclesCount(count);
				} catch (error) {
					console.error("Error fetching user vehicle count:", error);
				}
			}
		};

		getUserVehicleCount();
	}, [profile?.id]);

	useEffect(() => {
		const getUserVehicles = async () => {
			if (!profile?.id) return;

			const vehicles = await fetchUserVehicleDetails(profile?.id);
			setUserVehicles(vehicles);
		};

		getUserVehicles();
	}, [profile?.id]);

	const handleSaveName = async () => {
		try {
			await firebase.updateUserName(name);
			toast.success("Name updated successfully!");
		} catch (err) {
			console.log(err);
			toast.error("Failed to update name.");
		}
	};

	return (
		<div className="container mx-auto p-4 space-y-6">
			<div className="flex flex-col md:flex-row gap-6 items-start">
				<div className="card w-full md:w-1/3 flex flex-col items-center p-6 rounded-xl shadow-lg bg-base-200 text-base-content">
					<Avatar className="card-title w-32 h-32 border-4 border-primary">
						<AvatarImage src={profilePic} alt="User" />
						<AvatarFallback>User</AvatarFallback>
					</Avatar>
					<h2 className="mt-4 text-2xl font-bold">
						{profile?.name || "Loading..."}
					</h2>
					<p>{profile?.email || "Loading..."}</p>
					<div className="mt-6 w-full">
						<div className="flex justify-between mb-2">
							<span>Member since</span>
							<span>{profile?.createdAt || "Loading..."}</span>
						</div>
						<div className="flex justify-between mb-2">
							<span>Vehicles</span>
							<span>{userVehiclesCount}</span>
						</div>
						<div className="flex justify-between mb-2">
							<span>Last login</span>
							<span>{profile?.lastLoggedIn || "Loading..."}</span>
						</div>
					</div>
				</div>

				<div className="w-full md:w-2/3">
					<Tabs defaultValue="profile" className="w-full">
						<TabsList className="grid w-full grid-cols-2 mb-6 bg-base-200 text-base-content rounded-xl shadow">
							<TabsTrigger
								value="profile"
								className="py-2 px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-content rounded-l-xl"
							>
								Profile
							</TabsTrigger>
							<TabsTrigger
								value="vehicles"
								className="py-2 px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-content rounded-r-xl"
							>
								My Vehicles
							</TabsTrigger>
						</TabsList>

						<TabsContent value="profile" className="space-y-4">
							<Card>
								<CardHeader>
									<CardTitle>Personal Information</CardTitle>
									<CardDescription>
										Update your personal details here.
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="space-y-2">
											<Label htmlFor="name">Full Name</Label>
											<Input
												id="name"
												name="name"
												value={name}
												onChange={(e) => setName(e.target.value)}
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="email">Email</Label>
											<Input
												id="email"
												name="email"
												type="email"
												value={profile?.email || "Loading..."}
												readonly
											/>
										</div>
									</div>
									<Button
										onClick={handleSaveName}
										className="w-full md:w-auto btn btn-primary"
									>
										Save Changes
									</Button>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="vehicles" className="space-y-4">
							<Card>
								<CardHeader>
									<CardTitle>My Vehicles</CardTitle>
									<CardDescription>
										Manage your registered vehicles.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
										{userVehicles.map(({ vehicle }) => (
											<VehicleCard
												key={vehicle.id}
												vehicle={vehicle}
												showDetails={true}
												isOwner={true}
											/>
										))}
									</div>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	);
}
