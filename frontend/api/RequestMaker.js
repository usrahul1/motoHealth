import { axiosInstance } from "../lib/axios";

export const fetchAllVehicles = async () => {
	const query = `
    query {
      allVehicles {
        id
        brand
        model
        year
        mileage
        price
        imageUrl
      }
    }
  `;

	try {
		const response = await axiosInstance.post("", { query });
		console.log(response.data.data.allVehicles);
		return response.data.data.allVehicles;
	} catch (error) {
		console.error("Failed to fetch vehicles:", error);
		return [];
	}
};

export const fetchVehicleById = async (id) => {
	const query = `
    query ($id: ID!) {
      vehicleById(id: $id) {
        id 
        brand 
        model 
        year 
        mileage 
        isElectric 
        service 
        parts 
        insurance 
        safety 
        fuelTankCapacity 
        batteryCapacity 
        price 
        imageUrl  
      }
    }
  `;

	const variables = { id };

	try {
		const response = await axiosInstance.post("", {
			query,
			variables,
		});

		console.log(response.data.data.vehicleById);

		return response.data.data.vehicleById;
	} catch (error) {
		console.error("Failed to fetch vehicle by ID:", error);
		return null;
	}
};

export const fetchUserVehicleCount = async (userId) => {
	const query = `
    query ($userId: ID!) {
      userVehicleCount(userId: $userId)
    }
  `;

	const variables = { userId };

	try {
		const response = await axiosInstance.post("", {
			query,
			variables,
		});

		console.log(response.data.userVehicleCount);
		return response.data.userVehicleCount;
	} catch (error) {
		console.error("Failed to fetch user vehicle count:", error);
		return 0;
	}
};

export const addUserVehicle = async (userId, vehicleId) => {
	const mutation = `
    mutation ($userId: ID!, $vehicleId: ID!) {
      addUserVehicle(userId: $userId, vehicleId: $vehicleId) {
        id
        userId
        vehicle {
          id
          brand
          model
        }
      }
    }
  `;

	const variables = { userId, vehicleId };

	try {
		const response = await axiosInstance.post("", {
			query: mutation,
			variables,
		});

		console.log("Vehicle added to user:", response.data.data.addUserVehicle);
		return response.data.data.addUserVehicle;
	} catch (error) {
		console.error("Failed to add vehicle to user:", error);
		return null;
	}
};
