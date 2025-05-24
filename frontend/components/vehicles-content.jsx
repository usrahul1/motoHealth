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
import { fetchAllVehicles } from "@/api/RequestMaker";

export default function VehiclesContent() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");
	const [filterMake, setFilterMake] = useState("All");
	const [filterYear, setFilterYear] = useState("All");
	const [filterStatus, setFilterStatus] = useState("All");
	const [visibleVehicles, setVisibleVehicles] = useState(8);
	const [allVehicles, setAllVehicles] = useState([]);
	const [filteredVehicles, setFilteredVehicles] = useState([]);

	useEffect(() => {
		fetchAllVehicles().then(setAllVehicles);
	}, []);

	useEffect(() => {
		setFilteredVehicles(allVehicles);
	}, [allVehicles]);

	useEffect(() => {
		let result = allVehicles;

		if (searchTerm) {
			const term = searchTerm.toLowerCase();
			result = result.filter(
				(vehicle) =>
					vehicle.brand.toLowerCase().includes(term) ||
					vehicle.model.toLowerCase().includes(term)
			);
		}

		if (filterMake !== "All") {
			result = result.filter((vehicle) => vehicle.brand === filterMake);
		}

		if (filterYear !== "All") {
			result = result.filter(
				(vehicle) => vehicle.year.toString() === filterYear
			);
		}

		if (filterStatus !== "All") {
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

	const makes = ["All", ...new Set(allVehicles.map((v) => v.brand))];
	const years = ["All", ...new Set(allVehicles.map((v) => v.year))];

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

					<Button
						variant="outline"
						size="icon"
						onClick={() => {
							setSearchTerm("");
							setFilterMake("All");
							setFilterYear("All");
							setFilterStatus("All");
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
														src={vehicle.imageUrl || "/images/default-car.jpg"}
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
