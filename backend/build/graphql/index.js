"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const vehicles_1 = require("./vehicles");
function createGraphQLServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const gqlServer = new server_1.ApolloServer({
            typeDefs: `
        	${vehicles_1.Vehicle.typeDefs}
        type Query {
            ${vehicles_1.Vehicle.queries}
        }
        type Mutation {
            ${vehicles_1.Vehicle.mutations}
        } 
    `,
            resolvers: {
                Query: Object.assign({}, vehicles_1.Vehicle.resolvers.queries),
                Mutation: Object.assign({}, vehicles_1.Vehicle.resolvers.mutations),
            },
        });
        yield gqlServer.start();
        return gqlServer;
    });
}
exports.default = createGraphQLServer;
