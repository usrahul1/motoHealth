import APIService from "../../services/api";

type VehicleArgs = {
	brand: string;
	model: string;
};

const queries = {
	vehicleByBrandAndModel: async (_: any, args: VehicleArgs) => {
		return await APIService.getVehicleByBrandAndModel(args.brand, args.model);
	},

	vehicleByBrand: async (_: any, { brand }: { brand: string }) => {
		return await APIService.getVehiclesByBrand(brand);
	},

	userVehicles: async (_: any, { userId }: { userId: string }) => {
		return await APIService.getUserVehicles(userId);
	},

	userVehicleCount: async (_: any, { userId }: { userId: string }) => {
		return await APIService.getUserVehicleCount(userId);
	},

	allVehicleBrands: async () => {
		return await APIService.getAllVehicleBrands();
	},

	allVehicles: async () => {
		return await APIService.getAllVehicles();
	},

	vehicleById: async (_: any, { id }: { id: string }) => {
		return await APIService.getVehicleById(id);
	},
};

const mutations = {
	addUserVehicle: async (
		_: any,
		{ userId, vehicleId }: { userId: string; vehicleId: string }
	) => {
		return await APIService.addUserVehicle(userId, vehicleId);
	},
};

export const resolvers = { queries, mutations };
