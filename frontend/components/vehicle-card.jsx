"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";
import { Car, Calendar, Gauge, Fuel, Battery } from "lucide-react";

export default function VehicleCard({ vehicle, showDetails = true }) {
	const router = useRouter();

	const handleViewDetails = () => {
		router.push(`/vehicle-details/${vehicle.id}`);
	};

	return (
		<Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-slate-800 to-slate-900 border-none text-white">
			<div className="relative h-48">
				<img
					src={vehicle.image || "/images/default-car.jpg"}
					alt={`${vehicle.make} ${vehicle.model}`}
					className="w-full h-full object-cover"
				/>
				<div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
					{vehicle.status}
				</div>
			</div>
			<CardContent className="p-4">
				<div className="flex items-center gap-2 mb-2">
					<Car className="h-5 w-5 text-primary" />
					<h3 className="font-bold text-lg truncate">
						{vehicle.year} {vehicle.make} {vehicle.model}
					</h3>
				</div>

				<div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 text-sm">
					<div className="flex items-center gap-2">
						<Gauge className="h-4 w-4 text-muted-foreground" />
						<span>{vehicle.mileage.toLocaleString()} mi</span>
					</div>
				</div>

				<div className="mt-4 space-y-3">
					{vehicle.fuelLevel !== undefined && (
						<div className="space-y-1">
							<div className="flex justify-between text-xs">
								<span className="flex items-center gap-1">
									{vehicle.batteryHealth !== undefined ? (
										<>
											<Battery className="h-3 w-3" />
											Battery
										</>
									) : (
										<>
											<Fuel className="h-3 w-3" />
											Fuel
										</>
									)}
								</span>
								<span>
									{vehicle.batteryHealth !== undefined
										? `${vehicle.batteryHealth}%`
										: `${vehicle.fuelLevel}%`}
								</span>
							</div>
							<Progress
								value={
									vehicle.batteryHealth !== undefined
										? vehicle.batteryHealth
										: vehicle.fuelLevel
								}
								className="h-1.5"
							/>
						</div>
					)}
				</div>
			</CardContent>
			{showDetails && (
				<CardFooter className="p-4 pt-0">
					<Button
						className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
						onClick={handleViewDetails}
					>
						View Details
					</Button>
				</CardFooter>
			)}
		</Card>
	);
}
