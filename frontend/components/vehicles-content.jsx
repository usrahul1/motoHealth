"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VehicleCard from "./vehicle-card";
import { Search, Filter, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

// Sample vehicle data - in a real app, this would come from an API
const allVehicles = [
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
		make: "Honda",
		model: "Accord",
		year: 2021,
		image: "/images/honda-accord.jpg",
		status: "Good",
		lastService: "2023-01-05",
		mileage: 25400,
		fuelLevel: 45,
	},
	{
		id: 4,
		make: "BMW",
		model: "X5",
		year: 2022,
		image: "/images/bmw-x5.jpg",
		status: "Excellent",
		lastService: "2023-03-20",
		mileage: 15600,
		fuelLevel: 80,
	},
	{
		id: 5,
		make: "Ford",
		model: "F-150",
		year: 2020,
		image: "/images/ford-f150.jpg",
		status: "Fair",
		lastService: "2022-11-15",
		mileage: 32000,
		fuelLevel: 30,
	},
	{
		id: 6,
		make: "Mercedes-Benz",
		model: "C-Class",
		year: 2023,
		image: "/images/mercedes-cclass.jpg",
		status: "Excellent",
		lastService: "2023-05-01",
		mileage: 8900,
		fuelLevel: 75,
	},
	{
		id: 7,
		make: "Audi",
		model: "A4",
		year: 2021,
		image: "/images/audi-a4.jpg",
		status: "Good",
		lastService: "2022-12-10",
		mileage: 22300,
		fuelLevel: 60,
	},
	{
		id: 8,
		make: "Chevrolet",
		model: "Silverado",
		year: 2020,
		image: "/images/chevrolet-silverado.jpg",
		status: "Good",
		lastService: "2022-10-05",
		mileage: 28700,
		fuelLevel: 40,
	},
	{
		id: 9,
		make: "Nissan",
		model: "Altima",
		year: 2022,
		image: "/images/nissan-altima.jpg",
		status: "Excellent",
		lastService: "2023-02-15",
		mileage: 16800,
		fuelLevel: 70,
	},
	{
		id: 10,
		make: "Hyundai",
		model: "Sonata",
		year: 2021,
		image: "/images/hyundai-sonata.jpg",
		status: "Good",
		lastService: "2022-11-20",
		mileage: 20500,
		fuelLevel: 55,
	},
	{
		id: 11,
		make: "Kia",
		model: "Telluride",
		year: 2023,
		image: "/images/kia-telluride.jpg",
		status: "Excellent",
		lastService: "2023-04-10",
		mileage: 9800,
		fuelLevel: 85,
	},
	{
		id: 12,
		make: "Volkswagen",
		model: "Jetta",
		year: 2022,
		image: "/images/volkswagen-jetta.jpg",
		status: "Good",
		lastService: "2023-01-25",
		mileage: 17900,
		fuelLevel: 65,
	},
	// Additional vehicles
	{
		id: 13,
		make: "Subaru",
		model: "Outback",
		year: 2021,
		image: "/images/subaru-outback.jpg",
		status: "Good",
		lastService: "2022-12-05",
		mileage: 21300,
		fuelLevel: 60,
	},
	{
		id: 14,
		make: "Mazda",
		model: "CX-5",
		year: 2022,
		image: "/images/mazda-cx5.jpg",
		status: "Excellent",
		lastService: "2023-03-15",
		mileage: 14200,
		fuelLevel: 75,
	},
	{
		id: 15,
		make: "Lexus",
		model: "RX",
		year: 2023,
		image: "/images/lexus-rx.jpg",
		status: "Excellent",
		lastService: "2023-05-05",
		mileage: 7800,
		fuelLevel: 90,
	},
	{
		id: 16,
		make: "Jeep",
		model: "Wrangler",
		year: 2021,
		image: "/images/jeep-wrangler.jpg",
		status: "Good",
		lastService: "2022-11-10",
		mileage: 24600,
		fuelLevel: 50,
	},
	{
		id: 17,
		make: "Ram",
		model: "1500",
		year: 2020,
		image: "/images/ram-1500.jpg",
		status: "Fair",
		lastService: "2022-09-20",
		mileage: 35200,
		fuelLevel: 35,
	},
	{
		id: 18,
		make: "Dodge",
		model: "Challenger",
		year: 2022,
		image: "/images/dodge-challenger.jpg",
		status: "Excellent",
		lastService: "2023-02-25",
		mileage: 13500,
		fuelLevel: 70,
	},
	{
		id: 19,
		make: "Chrysler",
		model: "Pacifica",
		year: 2021,
		image: "/images/chrysler-pacifica.jpg",
		status: "Good",
		lastService: "2022-12-15",
		mileage: 19800,
		fuelLevel: 60,
	},
	{
		id: 20,
		make: "Buick",
		model: "Enclave",
		year: 2022,
		image: "/images/buick-enclave.jpg",
		status: "Good",
		lastService: "2023-01-30",
		mileage: 16200,
		fuelLevel: 65,
	},
];

export default function VehiclesContent() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");
	const [filterMake, setFilterMake] = useState("all");
	const [filterYear, setFilterYear] = useState("all");
	const [filterStatus, setFilterStatus] = useState("all");
	const [visibleVehicles, setVisibleVehicles] = useState(8);
	const [filteredVehicles, setFilteredVehicles] = useState(allVehicles);

	// Apply filters whenever search or filter values change
	useEffect(() => {
		let result = allVehicles;

		// Apply search term
		if (searchTerm) {
			const term = searchTerm.toLowerCase();
			result = result.filter(
				(vehicle) =>
					vehicle.make.toLowerCase().includes(term) ||
					vehicle.model.toLowerCase().includes(term)
			);
		}

		// Apply make filter
		if (filterMake !== "all") {
			result = result.filter((vehicle) => vehicle.make === filterMake);
		}

		// Apply year filter
		if (filterYear !== "all") {
			result = result.filter(
				(vehicle) => vehicle.year.toString() === filterYear
			);
		}

		// Apply status filter
		if (filterStatus !== "all") {
			result = result.filter((vehicle) => vehicle.status === filterStatus);
		}

		setFilteredVehicles(result);
	}, [searchTerm, filterMake, filterYear, filterStatus]);

	const handleLoadMore = () => {
		setVisibleVehicles((prev) => Math.min(prev + 8, filteredVehicles.length));
	};

	const handleAddVehicle = () => {
		router.push("/dashboard/add-vehicle");
	};

	// Get unique makes, years, and statuses for filters
	const makes = ["all", ...new Set(allVehicles.map((v) => v.make))];
	const years = ["all", ...new Set(allVehicles.map((v) => v.year))];
	const statuses = ["all", ...new Set(allVehicles.map((v) => v.status))];

	return (
		<div className="container mx-auto p-4 space-y-6">
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
				<h1 className="text-2xl font-bold">Vehicle Database</h1>
				<Button
					onClick={handleAddVehicle}
					className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
				>
					<Plus className="mr-2 h-4 w-4" /> Add Vehicle
				</Button>
			</div>

			<div className="flex flex-col md:flex-row gap-4">
				<div className="relative flex-1">
					<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
					<Input
						placeholder="Search vehicles..."
						className="pl-10"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>

				<div className="flex flex-wrap gap-2">
					<Select value={filterMake} onValueChange={setFilterMake}>
						<SelectTrigger className="w-[130px]">
							<SelectValue placeholder="Make" />
						</SelectTrigger>
						<SelectContent>
							{makes.map((make) => (
								<SelectItem key={make} value={make}>
									{make}
								</SelectItem>
							))}
						</SelectContent>
					</Select>

					<Select value={filterYear} onValueChange={setFilterYear}>
						<SelectTrigger className="w-[130px]">
							<SelectValue placeholder="Year" />
						</SelectTrigger>
						<SelectContent>
							{years.map((year) => (
								<SelectItem key={year} value={year.toString()}>
									{year}
								</SelectItem>
							))}
						</SelectContent>
					</Select>

					<Select value={filterStatus} onValueChange={setFilterStatus}>
						<SelectTrigger className="w-[130px]">
							<SelectValue placeholder="Status" />
						</SelectTrigger>
						<SelectContent>
							{statuses.map((status) => (
								<SelectItem key={status} value={status}>
									{status}
								</SelectItem>
							))}
						</SelectContent>
					</Select>

					<Button
						variant="outline"
						size="icon"
						onClick={() => {
							setSearchTerm("");
							setFilterMake("all");
							setFilterYear("all");
							setFilterStatus("all");
						}}
					>
						<Filter className="h-4 w-4" />
					</Button>
				</div>
			</div>

			<Tabs defaultValue="grid" className="w-full">
				<TabsList className="grid w-full max-w-[400px] grid-cols-2">
					<TabsTrigger value="grid">Grid View</TabsTrigger>
					<TabsTrigger value="table">Table View</TabsTrigger>
				</TabsList>

				<TabsContent value="grid" className="mt-6">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{filteredVehicles.slice(0, visibleVehicles).map((vehicle) => (
							<VehicleCard key={vehicle.id} vehicle={vehicle} />
						))}
					</div>

					{visibleVehicles < filteredVehicles.length && (
						<div className="mt-8 flex justify-center">
							<Button
								variant="outline"
								onClick={handleLoadMore}
								className="min-w-[200px]"
							>
								Load More
							</Button>
						</div>
					)}

					{filteredVehicles.length === 0 && (
						<div className="text-center py-12">
							<h3 className="text-xl font-medium">No vehicles found</h3>
							<p className="text-muted-foreground mt-2">
								Try adjusting your search or filters
							</p>
						</div>
					)}
				</TabsContent>

				<TabsContent value="table" className="mt-6">
					<div className="rounded-md border overflow-hidden">
						<div className="overflow-x-auto">
							<table className="w-full text-sm">
								<thead className="bg-muted">
									<tr>
										<th className="py-3 px-4 text-left font-medium">Vehicle</th>
										<th className="py-3 px-4 text-left font-medium">Year</th>
										<th className="py-3 px-4 text-left font-medium">
											Mileage/Range
										</th>

										<th className="py-3 px-4 text-left font-medium">Actions</th>
									</tr>
								</thead>
								<tbody className="divide-y">
									{filteredVehicles.slice(0, visibleVehicles).map((vehicle) => (
										<tr key={vehicle.id} className="hover:bg-muted/50">
											<td className="py-3 px-4">
												<div className="flex items-center gap-3">
													<img
														src={vehicle.image || "/images/default-car.jpg"}
														alt={`${vehicle.make} ${vehicle.model}`}
														className="w-10 h-10 rounded-md object-cover"
													/>
													<div>
														<div className="font-medium">
															{vehicle.make} {vehicle.model}
														</div>
													</div>
												</div>
											</td>
											<td className="py-3 px-4">{vehicle.year}</td>

											<td className="py-3 px-4">
												{vehicle.mileage.toLocaleString()} mi
											</td>
											<td className="py-3 px-4">
												<Button
													variant="ghost"
													size="sm"
													onClick={() =>
														router.push(`/vehicle-details/${vehicle.id}`)
													}
												>
													Details
												</Button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>

					{visibleVehicles < filteredVehicles.length && (
						<div className="mt-8 flex justify-center">
							<Button
								variant="outline"
								onClick={handleLoadMore}
								className="min-w-[200px]"
							>
								Load More
							</Button>
						</div>
					)}

					{filteredVehicles.length === 0 && (
						<div className="text-center py-12">
							<h3 className="text-xl font-medium">No vehicles found</h3>
							<p className="text-muted-foreground mt-2">
								Try adjusting your search or filters
							</p>
						</div>
					)}
				</TabsContent>
			</Tabs>
		</div>
	);
}
