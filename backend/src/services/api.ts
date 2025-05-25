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

	public static async addUserVehicle(
		userId: string,
		vehicleId: string
	): Promise<boolean> {
		try {
			await prismaClient.userVehicles.create({
				data: {
					userId,
					vehicleId,
				},
			});
			return true;
		} catch (error) {
			console.error("Failed to add user vehicle:", error);
			return false;
		}
	}

	public static async getUserVehicleCount(userId: string) {
		const count = await prismaClient.userVehicles.count({
			where: { userId },
		});
		console.log(count);
		return count;
	}

	public static async getAllVehicleBrands(): Promise<(string | null)[]> {
		const brands: { brand: string | null }[] =
			await prismaClient.vehicle.findMany({
				distinct: ["brand"],
				select: { brand: true },
			});
		return brands.map((b: { brand: string | null }) => b.brand);
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

	public static async removeUserVehicle(
		userId: string,
		vehicleId: string
	): Promise<boolean> {
		try {
			await prismaClient.userVehicles.deleteMany({
				where: {
					userId,
					vehicleId,
				},
			});
			return true;
		} catch (error) {
			console.error("Failed to remove user vehicle:", error);
			return false;
		}
	}
}

export default APIService;
