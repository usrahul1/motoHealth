const queries = {
	// allVehicles: async (_, { limit, offset }, { dataSources }) => {
	// 	return dataSources.vehicleAPI.getAllVehicles({ limit, offset });
	// },
	// vehiclesByBrand: async (_, { brand }, { dataSources }) => {
	// 	return dataSources.vehicleAPI.getVehiclesByBrand(brand);
	// },
	// vehicleByBrandAndModel: async (_, { brand, model }, { dataSources }) => {
	// 	return dataSources.vehicleAPI.getVehicleByBrandAndModel(brand, model);
	// },
	// yourVehicles: async (_, { userId }, { dataSources }) => {
	// 	return dataSources.vehicleAPI.getUserVehicles(userId);
	// },
};

const mutations = {};

export const resolvers = { queries, mutations };
