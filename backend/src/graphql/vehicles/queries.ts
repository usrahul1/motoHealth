export const queries = `#graphql
  vehicleByBrandAndModel(brand: String!, model: String!): Vehicle
  vehicleByBrand(brand: String!): [Vehicle!]!
  userVehicles(userId: ID!): [UserVehicle!]!
  userVehicleCount(userId: ID!): Int!

`;

// allVehicles(limit: Int, offset: Int): [Vehicle!]!
// vehiclesByBrand(brand: String!): [Vehicle!]!
// yourVehicles(userId: ID!): [Vehicle!]!
