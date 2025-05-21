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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import {
	CalendarIcon,
	Download,
	BarChart3,
	PieChart,
	LineChart,
	Car,
	Fuel,
	Wrench,
	DollarSign,
} from "lucide-react";
import MaintenanceChart from "./maintenance-chart";
import CostTrendChart from "./cost-trend-chart";
import FuelEfficiencyChart from "./fuel-efficiency-chart";
import VehicleComparisonChart from "./vehicle-comparison-chart";
import MaintenanceTypeChart from "./maintenance-type-chart";

export default function AnalyticsContent() {
	const [date, setDate] = useState({
		from: new Date(2023, 0, 1),
		to: new Date(),
	});
	const [selectedVehicle, setSelectedVehicle] = useState("all");

	return (
		<div className="container mx-auto p-4 space-y-6">
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
				<h1 className="text-2xl font-bold">Analytics Dashboard</h1>

				<div className="flex flex-wrap gap-2">
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								className="w-[240px] justify-start text-left font-normal"
							>
								<CalendarIcon className="mr-2 h-4 w-4" />
								{date.from ? (
									date.to ? (
										<>
											{format(date.from, "LLL dd, y")} -{" "}
											{format(date.to, "LLL dd, y")}
										</>
									) : (
										format(date.from, "LLL dd, y")
									)
								) : (
									<span>Pick a date range</span>
								)}
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-auto p-0" align="end">
							<Calendar
								initialFocus
								mode="range"
								defaultMonth={date.from}
								selected={date}
								onSelect={setDate}
								numberOfMonths={2}
							/>
						</PopoverContent>
					</Popover>

					<Select value={selectedVehicle} onValueChange={setSelectedVehicle}>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Select vehicle" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">All Vehicles</SelectItem>
							<SelectItem value="1">Tesla Model 3</SelectItem>
							<SelectItem value="2">Toyota Camry</SelectItem>
							<SelectItem value="3">BMW X5</SelectItem>
						</SelectContent>
					</Select>

					<Button variant="outline">
						<Download className="mr-2 h-4 w-4" />
						Export Data
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
									Your Vehicles
								</p>
								<h3 className="text-3xl font-bold mt-2">12</h3>
								<p className="text-sm text-muted-foreground mt-1">
									+2 from last month
								</p>
							</div>
							<div className="bg-blue-500/20 p-3 rounded-full">
								<Car className="h-6 w-6 text-blue-500" />
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/50">
					<CardContent className="p-6">
						<div className="flex justify-between items-start">
							<div>
								<p className="text-sm font-medium text-green-500">
									Fuel Efficiency
								</p>
								<h3 className="text-3xl font-bold mt-2">
									24.8 <span className="text-lg">mpg</span>
								</h3>
								<p className="text-sm text-muted-foreground mt-1">
									+1.2 from last month
								</p>
							</div>
							<div className="bg-green-500/20 p-3 rounded-full">
								<Fuel className="h-6 w-6 text-green-500" />
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-500/50">
					<CardContent className="p-6">
						<div className="flex justify-between items-start">
							<div>
								<p className="text-sm font-medium text-orange-500">
									Total Expenses
								</p>
								<h3 className="text-3xl font-bold mt-2">$4,285</h3>
								<p className="text-sm text-muted-foreground mt-1">
									-$320 from last month
								</p>
							</div>
							<div className="bg-orange-500/20 p-3 rounded-full">
								<DollarSign className="h-6 w-6 text-orange-500" />
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<Tabs defaultValue="overview" className="w-full">
				<TabsList className="grid w-full max-w-[600px] grid-cols-4">
					<TabsTrigger value="overview" className="flex items-center gap-2">
						<BarChart3 className="h-4 w-4" />
						<span className="hidden sm:inline">Overview</span>
					</TabsTrigger>
					<TabsTrigger value="costs" className="flex items-center gap-2">
						<DollarSign className="h-4 w-4" />
						<span className="hidden sm:inline">Costs</span>
					</TabsTrigger>

					<TabsTrigger value="comparison" className="flex items-center gap-2">
						<PieChart className="h-4 w-4" />
						<span className="hidden sm:inline">Comparison</span>
					</TabsTrigger>
				</TabsList>

				<TabsContent value="overview" className="space-y-4 mt-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<LineChart className="h-5 w-5" />
									Cost Trends
								</CardTitle>
								<CardDescription>
									Monthly breakdown of vehicle-related expenses
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="h-80">
									<CostTrendChart />
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<BarChart3 className="h-5 w-5" />
									Maintenance History
								</CardTitle>
								<CardDescription>
									Maintenance and repair costs over time
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="h-80">
									<MaintenanceChart />
								</div>
							</CardContent>
						</Card>
					</div>

					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Fuel className="h-5 w-5" />
								Fuel Efficiency
							</CardTitle>
							<CardDescription>
								Miles per gallon over time for all vehicles
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="h-80">
								<FuelEfficiencyChart />
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="costs" className="space-y-4 mt-6">
					<Card>
						<CardHeader>
							<CardTitle>Cost Breakdown</CardTitle>
							<CardDescription>
								Detailed breakdown of all vehicle-related expenses
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="h-96">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
									<div>
										<h4 className="text-lg font-medium mb-4">
											Expense Categories
										</h4>
										<div className="space-y-6">
											<div>
												<div className="flex justify-between mb-1">
													<span className="text-sm font-medium">
														Maintenance
													</span>
													<span className="text-sm font-medium">
														$1,845 (43%)
													</span>
												</div>
												<div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
													<div
														className="bg-blue-500 h-full rounded-full"
														style={{ width: "43%" }}
													></div>
												</div>
											</div>

											<div>
												<div className="flex justify-between mb-1">
													<span className="text-sm font-medium">Fuel</span>
													<span className="text-sm font-medium">
														$1,250 (29%)
													</span>
												</div>
												<div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
													<div
														className="bg-green-500 h-full rounded-full"
														style={{ width: "29%" }}
													></div>
												</div>
											</div>

											<div>
												<div className="flex justify-between mb-1">
													<span className="text-sm font-medium">Insurance</span>
													<span className="text-sm font-medium">
														$850 (20%)
													</span>
												</div>
												<div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
													<div
														className="bg-purple-500 h-full rounded-full"
														style={{ width: "20%" }}
													></div>
												</div>
											</div>

											<div>
												<div className="flex justify-between mb-1">
													<span className="text-sm font-medium">
														Registration
													</span>
													<span className="text-sm font-medium">$340 (8%)</span>
												</div>
												<div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
													<div
														className="bg-orange-500 h-full rounded-full"
														style={{ width: "8%" }}
													></div>
												</div>
											</div>
										</div>
									</div>

									<div>
										<h4 className="text-lg font-medium mb-4">
											Cost Per Vehicle
										</h4>
										<div className="space-y-6">
											<div>
												<div className="flex justify-between mb-1">
													<span className="text-sm font-medium">
														Tesla Model 3
													</span>
													<span className="text-sm font-medium">
														$1,250 (29%)
													</span>
												</div>
												<div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
													<div
														className="bg-blue-500 h-full rounded-full"
														style={{ width: "29%" }}
													></div>
												</div>
											</div>

											<div>
												<div className="flex justify-between mb-1">
													<span className="text-sm font-medium">
														Toyota Camry
													</span>
													<span className="text-sm font-medium">
														$1,845 (43%)
													</span>
												</div>
												<div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
													<div
														className="bg-green-500 h-full rounded-full"
														style={{ width: "43%" }}
													></div>
												</div>
											</div>

											<div>
												<div className="flex justify-between mb-1">
													<span className="text-sm font-medium">BMW X5</span>
													<span className="text-sm font-medium">
														$1,190 (28%)
													</span>
												</div>
												<div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
													<div
														className="bg-purple-500 h-full rounded-full"
														style={{ width: "28%" }}
													></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Monthly Cost Trends</CardTitle>
							<CardDescription>
								How your costs have changed over time
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="h-80">
								<CostTrendChart />
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="comparison" className="space-y-4 mt-6">
					<Card>
						<CardHeader>
							<CardTitle>Vehicle Comparison</CardTitle>
							<CardDescription>
								Compare performance metrics across your vehicles
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="h-80">
								<VehicleComparisonChart />
							</div>
						</CardContent>
					</Card>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<Card>
							<CardHeader className="pb-2">
								<CardTitle className="text-lg">Fuel Efficiency</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<div>
										<div className="flex justify-between mb-1">
											<span className="text-sm">Tesla Model 3</span>
											<span className="text-sm font-medium">
												N/A (Electric)
											</span>
										</div>
										<div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
											<div
												className="bg-blue-500 h-full rounded-full"
												style={{ width: "100%" }}
											></div>
										</div>
									</div>

									<div>
										<div className="flex justify-between mb-1">
											<span className="text-sm">Toyota Camry</span>
											<span className="text-sm font-medium">32 mpg</span>
										</div>
										<div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
											<div
												className="bg-green-500 h-full rounded-full"
												style={{ width: "80%" }}
											></div>
										</div>
									</div>

									<div>
										<div className="flex justify-between mb-1">
											<span className="text-sm">BMW X5</span>
											<span className="text-sm font-medium">22 mpg</span>
										</div>
										<div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
											<div
												className="bg-purple-500 h-full rounded-full"
												style={{ width: "55%" }}
											></div>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className="pb-2">
								<CardTitle className="text-lg">Maintenance Cost</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<div>
										<div className="flex justify-between mb-1">
											<span className="text-sm">Tesla Model 3</span>
											<span className="text-sm font-medium">$450/year</span>
										</div>
										<div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
											<div
												className="bg-blue-500 h-full rounded-full"
												style={{ width: "45%" }}
											></div>
										</div>
									</div>

									<div>
										<div className="flex justify-between mb-1">
											<span className="text-sm">Toyota Camry</span>
											<span className="text-sm font-medium">$650/year</span>
										</div>
										<div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
											<div
												className="bg-green-500 h-full rounded-full"
												style={{ width: "65%" }}
											></div>
										</div>
									</div>

									<div>
										<div className="flex justify-between mb-1">
											<span className="text-sm">BMW X5</span>
											<span className="text-sm font-medium">$1,200/year</span>
										</div>
										<div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
											<div
												className="bg-purple-500 h-full rounded-full"
												style={{ width: "100%" }}
											></div>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className="pb-2">
								<CardTitle className="text-lg">Reliability Score</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<div>
										<div className="flex justify-between mb-1">
											<span className="text-sm">Tesla Model 3</span>
											<span className="text-sm font-medium">85/100</span>
										</div>
										<div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
											<div
												className="bg-blue-500 h-full rounded-full"
												style={{ width: "85%" }}
											></div>
										</div>
									</div>

									<div>
										<div className="flex justify-between mb-1">
											<span className="text-sm">Toyota Camry</span>
											<span className="text-sm font-medium">92/100</span>
										</div>
										<div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
											<div
												className="bg-green-500 h-full rounded-full"
												style={{ width: "92%" }}
											></div>
										</div>
									</div>

									<div>
										<div className="flex justify-between mb-1">
											<span className="text-sm">BMW X5</span>
											<span className="text-sm font-medium">78/100</span>
										</div>
										<div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
											<div
												className="bg-purple-500 h-full rounded-full"
												style={{ width: "78%" }}
											></div>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
