export const typeDefs = `#graphql
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
  }
`;
