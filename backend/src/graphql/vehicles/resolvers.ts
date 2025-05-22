import APIService from "../../services/api";

type VehicleArgs = {
	brand: string;
	model: string;
};

const queries = {
	// allVehicles: async (_, { limit, offset }, { dataSources }) => {
	// 	return dataSources.vehicleAPI.getAllVehicles({ limit, offset });
	// },

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
