import { prismaClient } from "../lib/db";

class APIService {
	public static async getVehicleByBrandAndModel(brand: string, model: string) {
		const vehicle = await prismaClient.vehicle.findFirst({
			where: {
				brand: brand,
				model: model,
			},
		});

		return vehicle;
	}

	public static async getVehiclesByBrand(brand: string) {
		const vehicles = await prismaClient.vehicle.findMany({
			where: {
				brand: brand,
			},
		});

		return vehicles;
	}

	public static async getUserVehicles(userId: string) {
		const userVehicles = await prismaClient.userVehicles.findMany({
			where: { userId },
			include: { vehicle: true },
		});

		return userVehicles;
	}

	public static async addUserVehicle(userId: string, vehicleId: string) {
		const newUserVehicle = await prismaClient.userVehicles.create({
			data: {
				userId,
				vehicleId,
			},
		});

		return newUserVehicle;
	}

	public static async getUserVehicleCount(userId: string) {
		const count = await prismaClient.userVehicles.count({
			where: { userId },
		});
		return count;
	}

	public static async getAllVehicleBrands() {
		const brands = await prismaClient.vehicle.findMany({
			distinct: ["brand"],
			select: { brand: true },
		});
		return brands.map((b) => b.brand);
	}

	public static async getAllVehicles() {
		return await prismaClient.vehicle.findMany();
	}

	public static async getVehicleById(id: string) {
		const vehicle = await prismaClient.vehicle.findUnique({
			where: {
				id: id,
			},
		});
		return vehicle;
	}
}

export default APIService;
