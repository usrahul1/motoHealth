"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutations = void 0;
exports.mutations = `#graphql
  addUserVehicle(userId: ID!, vehicleId: ID!): Boolean!
  removeUserVehicle(userId: ID!, vehicleId: ID!): Boolean!
`;
