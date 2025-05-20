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
}

export default APIService;
