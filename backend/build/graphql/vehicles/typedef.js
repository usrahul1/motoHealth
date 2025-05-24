"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `#graphql
  type Vehicle {
    id: ID!
    brand: String!
    model: String!
    year: Int!
    mileage: Int!
    isElectric: Boolean!
    service: Float!
    parts: Float!
    insurance: Float!
    safety: Float!
    fuelTankCapacity: Float
    batteryCapacity: Float
    price: Float!
    imageUrl: String    
  }

  type UserVehicle {
    id: ID!
    userId: ID!
    vehicle: Vehicle!
  }
`;
