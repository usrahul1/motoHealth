export const queries = `#graphql
  allVehicles(limit: Int, offset: Int): [Vehicle!]!
  vehiclesByBrand(brand: String!): [Vehicle!]!
  vehicleByBrandAndModel(brand: String!, model: String!): Vehicle
  yourVehicles(userId: ID!): [Vehicle!]!
`;
