import { ApolloServer } from "@apollo/server";
import { Vehicle } from "./vehicles";

async function createGraphQLServer() {
	const gqlServer = new ApolloServer({
		typeDefs: `
        ${Vehicle.typeDefs}
        type Query {
            ${Vehicle.queries}
            hello: String
        }
        type Mutation {
            ${Vehicle.mutations}
        } 
    `,
		resolvers: {
			Query: {
				...Vehicle.resolvers.queries,
			},
			Mutation: {
				...Vehicle.resolvers.mutations,
			},
		},
	});

	await gqlServer.start();
	return gqlServer;
}

export default createGraphQLServer;
