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
import { useToast } from "@/components/ui/use-toast";
import VehicleCard from "./vehicle-card";
import { useRouter } from "next/navigation";
import { useFirebase } from "@/context/Firebase";
import avatar from "../public/images/profile-avatar.jpg";

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
	const { toast } = useToast();
	const firebase = useFirebase();
	const [profilePic, setProfilePic] = useState(avatar);
	const [profile, setProfile] = useState(null);
	const router = useRouter();
	const [profileData, setProfileData] = useState({
		name: "Alex Johnson",
		email: "alex.johnson@example.com",
		phone: "+1 (555) 123-4567",
		address: "123 Main Street, San Francisco, CA 94105",
		password: "••••••••",
		notifications: true,
		darkMode: true,
		dataSharing: false,
	});

	useEffect(() => {
		const details = firebase.profDetails();
		if (details) {
			console.log("details are: ", details);
			setProfile(details);
			if (details.photoURL != null) setProfilePic(details.photoURL);
		}
	}, [firebase]);

	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setProfileData({
			...profileData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const handleSaveProfile = () => {
		toast({
			title: "Profile updated",
			description: "Your profile information has been updated successfully.",
		});
	};

	const handleSaveSettings = () => {
		toast({
			title: "Settings updated",
			description: "Your account settings have been updated successfully.",
		});
	};

	const handleChangePassword = () => {
		toast({
			title: "Password changed",
			description: "Your password has been changed successfully.",
		});
	};

	const handleAddVehicle = () => {
		router.push("/dashboard/add-vehicle");
	};

	return (
		<div className="container mx-auto p-4 space-y-6">
			<div className="flex flex-col md:flex-row gap-6 items-start">
				<div className="w-full md:w-1/3 flex flex-col items-center p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg">
					<Avatar className="w-32 h-32 border-4 border-primary">
						<AvatarImage src={profilePic} alt="User" />
						<AvatarFallback>AJ</AvatarFallback>
					</Avatar>
					<h2 className="mt-4 text-2xl font-bold text-white">
						{profile?.name || "Loading..."}
					</h2>
					<p className="text-slate-300">{profile?.email || "Loading..."}</p>
					<div className="mt-6 w-full">
						<div className="flex justify-between text-slate-300 mb-2">
							<span>Member since</span>
							<span>{profile?.createdAt || "Loading..."} </span>
						</div>
						<div className="flex justify-between text-slate-300 mb-2">
							<span>Vehicles</span>
							<span>{vehicles.length}</span>
						</div>
						<div className="flex justify-between text-slate-300 mb-2">
							<span>Last login</span>
							<span>Today</span>
						</div>
					</div>
					<Button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
						Edit Profile Picture
					</Button>
				</div>

				<div className="w-full md:w-2/3">
					<Tabs defaultValue="profile" className="w-full">
						<TabsList className="grid w-full grid-cols-3 mb-6">
							<TabsTrigger value="profile">Profile</TabsTrigger>
							<TabsTrigger value="vehicles">My Vehicles</TabsTrigger>
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
												value={profile?.name || "Loading..."}
												onChange={handleInputChange}
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="email">Email</Label>
											<Input
												id="email"
												name="email"
												type="email"
												value={profile?.email || "Loading..."}
												onChange={handleInputChange}
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="phone">Phone</Label>
											<Input
												id="phone"
												name="phone"
												value={profile?.number || "Null"}
												onChange={handleInputChange}
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="address">Address</Label>
											<Input
												id="address"
												name="address"
												value={profile?.addr || "Null"}
												onChange={handleInputChange}
											/>
										</div>
									</div>
									<Button
										className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
										onClick={handleSaveProfile}
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
										{vehicles.map((vehicle) => (
											<VehicleCard
												key={vehicle.id}
												vehicle={vehicle}
												showDetails={true}
											/>
										))}
									</div>
									<Button
										className="mt-6 w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
										onClick={handleAddVehicle}
									>
										Add New Vehicle
									</Button>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	);
}
