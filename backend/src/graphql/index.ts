import { ApolloServer } from "@apollo/server";

async function createGraphQLServer() {
	const gqlServer = new ApolloServer({
		typeDefs: ``,
		resolvers: {},
	});

	await gqlServer.start();
	return gqlServer;
}

export default createGraphQLServer;
