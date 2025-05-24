"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queries = void 0;
exports.queries = `#graphql
  vehicleById(id: ID!): Vehicle!
  vehicleByBrandAndModel(brand: String!, model: String!): Vehicle
  vehicleByBrand(brand: String!): [Vehicle!]!
  userVehicles(userId: ID!): [UserVehicle!]!
  userVehicleCount(userId: ID!): Int!
  allVehicleBrands: [String!]!
  allVehicles: [Vehicle!]! 
`;
