import APIService from "../../services/api";

type VehicleArgs = {
	brand: string;
	model: string;
};

const queries = {
	// allVehicles: async (_, { limit, offset }, { dataSources }) => {
	// 	return dataSources.vehicleAPI.getAllVehicles({ limit, offset });
	// },
	// vehiclesByBrand: async (_, { brand }, { dataSources }) => {
	// 	return dataSources.vehicleAPI.getVehiclesByBrand(brand);
	// },
	vehicleByBrandAndModel: async (_: any, args: VehicleArgs) => {
		return await APIService.getVehicleByBrandAndModel(args.brand, args.model);
	},
	// yourVehicles: async (_, { userId }, { dataSources }) => {
	// 	return dataSources.vehicleAPI.getUserVehicles(userId);
	// },
};

const mutations = {};

export const resolvers = { queries, mutations };
