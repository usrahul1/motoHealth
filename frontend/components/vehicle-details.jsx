"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
	Car,
	Gauge,
	PenToolIcon as Tool,
	FileText,
	AlertTriangle,
	ChevronLeft,
	ChevronRight,
	Download,
} from "lucide-react";
import MaintenanceChart from "./maintenance-chart";
import CostTrendChart from "./cost-trend-chart";

export default function VehicleDetails({ vehicleId }) {
	const [activeImageIndex, setActiveImageIndex] = useState(0);

	// This would normally come from an API or database
	const vehicle = {
		id: vehicleId || 1,
		make: "Tesla",
		model: "Model 3",
		year: 2023,
		vin: "5YJ3E1EA1PF123456",
		licensePlate: "EV-TESLA",
		purchaseDate: "2023-01-15",
		purchasePrice: 52990,
		color: "Midnight Silver",
		status: "Excellent",
		lastService: "2023-04-15",
		nextService: "2023-10-15",
		mileage: 12500,
		fuelLevel: 0,
		batteryHealth: 95,
		batteryRange: 310,
		images: [
			"/images/tesla-model3.jpg",
			"/images/tesla-model3-interior.jpg",
			"/images/tesla-model3-rear.jpg",
		],
		maintenanceHistory: [
			{
				date: "2023-04-15",
				type: "Regular Service",
				cost: 150,
				description: "Software update, tire rotation, brake inspection",
			},
			{
				date: "2023-02-10",
				type: "Repair",
				cost: 350,
				description: "Replace cabin air filter, fix door handle",
			},
			{
				date: "2023-01-05",
				type: "Inspection",
				cost: 75,
				description: "Pre-delivery inspection",
			},
		],
		documents: [
			{ name: "Purchase Agreement", date: "2023-01-15", type: "PDF" },
			{ name: "Insurance Policy", date: "2023-01-16", type: "PDF" },
			{ name: "Warranty Information", date: "2023-01-15", type: "PDF" },
		],
		alerts: [
			{
				severity: "low",
				message: "Tire pressure slightly low",
				date: "2023-05-01",
			},
			{
				severity: "info",
				message: "Software update available",
				date: "2023-04-28",
			},
		],
	};

	const nextImage = () => {
		setActiveImageIndex((prev) => (prev + 1) % vehicle.images.length);
	};

	const prevImage = () => {
		setActiveImageIndex(
			(prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length
		);
	};

	return (
		<div className="container mx-auto p-4 space-y-6">
			<div className="flex flex-col md:flex-row gap-6">
				{/* Vehicle Image Gallery */}
				<div className="w-full md:w-1/2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg overflow-hidden">
					<div className="relative h-64 md:h-80">
						<img
							src={vehicle.images[activeImageIndex] || "/placeholder.svg"}
							alt={`${vehicle.make} ${vehicle.model}`}
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 flex items-center justify-between p-4">
							<Button
								variant="ghost"
								size="icon"
								className="bg-black/30 text-white rounded-full hover:bg-black/50"
								onClick={prevImage}
							>
								<ChevronLeft className="h-6 w-6" />
							</Button>
							<Button
								variant="ghost"
								size="icon"
								className="bg-black/30 text-white rounded-full hover:bg-black/50"
								onClick={nextImage}
							>
								<ChevronRight className="h-6 w-6" />
							</Button>
						</div>
						<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
							{vehicle.images.map((_, index) => (
								<button
									key={index}
									className={`w-2 h-2 rounded-full ${
										index === activeImageIndex ? "bg-white" : "bg-white/50"
									}`}
									onClick={() => setActiveImageIndex(index)}
								/>
							))}
						</div>
					</div>
					<div className="p-6">
						<h2 className="text-2xl font-bold text-white flex items-center gap-2">
							<Car className="h-6 w-6" />
							{vehicle.year} {vehicle.make} {vehicle.model}
						</h2>
						<div className="mt-4 grid grid-cols-2 gap-4">
							<div className="flex flex-col">
								<span className="text-slate-400 text-sm">Status</span>
								<span className="text-white font-medium">{vehicle.status}</span>
							</div>
							<div className="flex flex-col">
								<span className="text-slate-400 text-sm">Last Service</span>
								<span className="text-white font-medium">
									{vehicle.lastService}
								</span>
							</div>
							<div className="flex flex-col">
								<span className="text-slate-400 text-sm">VIN</span>
								<span className="text-white font-medium">{vehicle.vin}</span>
							</div>
							<div className="flex flex-col">
								<span className="text-slate-400 text-sm">License Plate</span>
								<span className="text-white font-medium">
									{vehicle.licensePlate}
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Vehicle Stats */}
				<div className="w-full md:w-1/2 space-y-4">
					<Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-none text-white">
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Gauge className="h-5 w-5" />
								Vehicle Status
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-2">
								<div className="flex justify-between">
									<span>Mileage</span>
									<span>{vehicle.mileage.toLocaleString()} miles</span>
								</div>
								<Progress value={vehicle.mileage / 150} className="h-2" />
							</div>

							{vehicle.fuelLevel > 0 ? (
								<div className="space-y-2">
									<div className="flex justify-between">
										<span>Fuel Level</span>
										<span>{vehicle.fuelLevel}%</span>
									</div>
									<Progress value={vehicle.fuelLevel} className="h-2" />
								</div>
							) : (
								<div className="space-y-2">
									<div className="flex justify-between">
										<span>Battery Health</span>
										<span>{vehicle.batteryHealth}%</span>
									</div>
									<Progress value={vehicle.batteryHealth} className="h-2" />
								</div>
							)}

							{vehicle.batteryRange && (
								<div className="space-y-2">
									<div className="flex justify-between">
										<span>Battery Range</span>
										<span>{vehicle.batteryRange} miles</span>
									</div>
									<Progress
										value={(vehicle.batteryRange / 350) * 100}
										className="h-2"
									/>
								</div>
							)}

							<div className="pt-2 grid grid-cols-2 gap-4">
								<div className="flex flex-col">
									<span className="text-slate-400 text-sm">Next Service</span>
									<span className="font-medium">{vehicle.nextService}</span>
								</div>
								<div className="flex flex-col">
									<span className="text-slate-400 text-sm">Purchase Date</span>
									<span className="font-medium">{vehicle.purchaseDate}</span>
								</div>
								<div className="flex flex-col">
									<span className="text-slate-400 text-sm">Purchase Price</span>
									<span className="font-medium">
										${vehicle.purchasePrice.toLocaleString()}
									</span>
								</div>
								<div className="flex flex-col">
									<span className="text-slate-400 text-sm">Color</span>
									<span className="font-medium">{vehicle.color}</span>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Alerts */}
					{vehicle.alerts && vehicle.alerts.length > 0 && (
						<Card className="border-orange-500 bg-orange-500/10">
							<CardHeader className="pb-2">
								<CardTitle className="text-orange-500 flex items-center gap-2">
									<AlertTriangle className="h-5 w-5" />
									Alerts
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2">
									{vehicle.alerts.map((alert, index) => (
										<li key={index} className="flex items-start gap-2">
											<AlertTriangle
												className={`h-5 w-5 mt-0.5 ${
													alert.severity === "high"
														? "text-red-500"
														: alert.severity === "medium"
														? "text-orange-500"
														: alert.severity === "low"
														? "text-yellow-500"
														: "text-blue-500"
												}`}
											/>
											<div>
												<p className="font-medium">{alert.message}</p>
												<p className="text-sm text-muted-foreground">
													{alert.date}
												</p>
											</div>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					)}
				</div>
			</div>

			{/* Tabs for Maintenance, Analytics, Documents */}
			<Tabs defaultValue="maintenance" className="w-full">
				<TabsList className="grid w-full grid-cols-3 mb-6">
					<TabsTrigger value="maintenance">Maintenance History</TabsTrigger>
					<TabsTrigger value="analytics">Analytics</TabsTrigger>
					<TabsTrigger value="documents">Documents</TabsTrigger>
				</TabsList>

				<TabsContent value="maintenance" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Tool className="h-5 w-5" />
								Maintenance History
							</CardTitle>
							<CardDescription>
								View all maintenance records for your vehicle.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-6">
								{vehicle.maintenanceHistory.map((record, index) => (
									<div
										key={index}
										className="border-b pb-4 last:border-0 last:pb-0"
									>
										<div className="flex justify-between items-start">
											<div>
												<h4 className="font-medium">{record.type}</h4>
												<p className="text-sm text-muted-foreground">
													{record.date}
												</p>
											</div>
											<div className="text-right">
												<span className="font-medium">${record.cost}</span>
											</div>
										</div>
										<p className="mt-2 text-sm">{record.description}</p>
									</div>
								))}
							</div>
							<Button className="mt-6 w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
								Add Maintenance Record
							</Button>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Maintenance Trends</CardTitle>
							<CardDescription>
								View maintenance costs and frequency over time.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="h-80">
								<MaintenanceChart />
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="analytics" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>Cost Analysis</CardTitle>
							<CardDescription>
								Track your vehicle expenses over time.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="h-80">
								<CostTrendChart />
							</div>
						</CardContent>
					</Card>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<Card>
							<CardHeader>
								<CardTitle>Efficiency Metrics</CardTitle>
								<CardDescription>
									Track your vehicle's efficiency.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<div className="space-y-2">
										<div className="flex justify-between">
											<span>Energy Efficiency</span>
											<span>4.2 mi/kWh</span>
										</div>
										<Progress value={84} className="h-2" />
									</div>
									<div className="space-y-2">
										<div className="flex justify-between">
											<span>Cost per Mile</span>
											<span>$0.06</span>
										</div>
										<Progress value={90} className="h-2" />
									</div>
									<div className="space-y-2">
										<div className="flex justify-between">
											<span>Carbon Footprint</span>
											<span>Low</span>
										</div>
										<Progress value={95} className="h-2" />
									</div>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Usage Statistics</CardTitle>
								<CardDescription>How you use your vehicle.</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<div className="flex justify-between items-center">
										<span>Daily Average</span>
										<span className="font-medium">32 miles</span>
									</div>
									<div className="flex justify-between items-center">
										<span>Weekly Average</span>
										<span className="font-medium">224 miles</span>
									</div>
									<div className="flex justify-between items-center">
										<span>Monthly Average</span>
										<span className="font-medium">960 miles</span>
									</div>
									<div className="flex justify-between items-center">
										<span>Most Common Trip</span>
										<span className="font-medium">Work Commute (15 mi)</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</TabsContent>

				<TabsContent value="documents" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<FileText className="h-5 w-5" />
								Vehicle Documents
							</CardTitle>
							<CardDescription>
								Access and manage your vehicle documents.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{vehicle.documents.map((doc, index) => (
									<div
										key={index}
										className="flex items-center justify-between p-3 border rounded-lg"
									>
										<div className="flex items-center gap-3">
											<div className="bg-primary/10 p-2 rounded-md">
												<FileText className="h-5 w-5 text-primary" />
											</div>
											<div>
												<h4 className="font-medium">{doc.name}</h4>
												<p className="text-sm text-muted-foreground">
													{doc.date} • {doc.type}
												</p>
											</div>
										</div>
										<Button variant="ghost" size="icon">
											<Download className="h-5 w-5" />
										</Button>
									</div>
								))}
							</div>
							<div className="mt-6 flex flex-col sm:flex-row gap-2">
								<Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
									Upload Document
								</Button>
								<Button variant="outline">Request Document</Button>
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
