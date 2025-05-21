"use client";

import { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
	Car,
	Gauge,
	Wrench,
	Calendar,
	AlertTriangle,
	BarChart3,
	ArrowRight,
	Plus,
} from "lucide-react";
import VehicleCard from "./vehicle-card";
import MaintenanceChart from "./maintenance-chart";
import CostTrendChart from "./cost-trend-chart";

// Sample vehicle data
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
	},
];

// Sample alerts data
const alerts = [
	{
		id: 1,
		vehicle: "Tesla Model 3",
		message: "Tire pressure is low",
		severity: "warning",
		date: "2023-05-10",
	},
	{
		id: 2,
		vehicle: "BMW X5",
		message: "Oil change due in 500 miles",
		severity: "info",
		date: "2023-05-08",
	},
	{
		id: 3,
		vehicle: "Toyota Camry",
		message: "Brake pads need inspection",
		severity: "warning",
		date: "2023-05-05",
	},
];

// Sample upcoming maintenance data
const upcomingMaintenance = [
	{
		id: 1,
		vehicle: "Tesla Model 3",
		service: "Tire Rotation",
		date: "2023-06-15",
		cost: "$80",
	},
	{
		id: 2,
		vehicle: "BMW X5",
		service: "Oil Change",
		date: "2023-06-22",
		cost: "$120",
	},
	{
		id: 3,
		vehicle: "Toyota Camry",
		service: "Brake Inspection",
		date: "2023-07-05",
		cost: "$150",
	},
];

export default function DashboardContent() {
	const router = useRouter();
	const [activeTab, setActiveTab] = useState("overview");

	const handleViewAllVehicles = () => {
		router.push("/dashboard/vehicles");
	};

	const handleAddVehicle = () => {
		router.push("/dashboard/add-vehicle");
	};

	const handleViewAnalytics = () => {
		router.push("/dashboard/analytics");
	};

	return (
		<div className="container mx-auto p-4 space-y-6">
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
				<h1 className="text-2xl font-bold">Dashboard</h1>
				<div className="flex gap-2">
					<Button
						onClick={handleAddVehicle}
						className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
					>
						<Plus className="mr-2 h-4 w-4" /> Add Vehicle
					</Button>
				</div>
			</div>

			{/* Summary Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				<Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/50">
					<CardContent className="p-6">
						<div className="flex justify-between items-start">
							<div>
								<p className="text-sm font-medium text-blue-500">
									Total Vehicles
								</p>
								<h3 className="text-3xl font-bold mt-2">{vehicles.length}</h3>
								<p className="text-sm text-muted-foreground mt-1">
									+1 from last month
								</p>
							</div>
							<div className="bg-blue-500/20 p-3 rounded-full">
								<Car className="h-6 w-6 text-blue-500" />
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<Tabs
				defaultValue="overview"
				className="w-full"
				value={activeTab}
				onValueChange={setActiveTab}
			>
				<TabsList className="grid max-w-[200px]">
					<TabsTrigger value="overview">Overview</TabsTrigger>
				</TabsList>

				<TabsContent value="overview" className="space-y-4">
					<Card>
						<CardHeader className="flex flex-row items-center justify-between">
							<div>
								<CardTitle>Your Vehicles</CardTitle>
								<CardDescription>
									Manage and monitor your vehicles
								</CardDescription>
							</div>
							<Button variant="outline" onClick={handleViewAllVehicles}>
								View All
							</Button>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
								{vehicles.map((vehicle) => (
									<VehicleCard key={vehicle.id} vehicle={vehicle} />
								))}
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
