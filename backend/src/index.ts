import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import createGraphQLServer from "./graphql";
import dotenv from "dotenv";

dotenv.config();

async function init() {
	const app = express();
	const PORT = process.env.PORT || 3000;

	app.use(express.json());
	app.get("/", (req, res) => {
		res.json({
			message: "server started bro",
		});
	});

	const gqlServer = await createGraphQLServer();
	app.use("/graphql", expressMiddleware(gqlServer) as express.Express);

	app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

init();
