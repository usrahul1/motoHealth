import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import createGraphQLServer from "./graphql";
import dotenv from "dotenv";
import cors from "cors";

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
	app.use(
		cors({
			origin: "http://localhost:3001",
			credentials: true,
		})
	);

	const gqlServer = await createGraphQLServer();
	app.use("/graphql", expressMiddleware(gqlServer) as express.Express);

	app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

init();
