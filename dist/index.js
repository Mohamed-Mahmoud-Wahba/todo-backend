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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const task_1 = require("./resolvers/task");
const apollo_server_core_1 = require("apollo-server-core");
const typeorm_1 = require("typeorm");
const Task_1 = require("./entities/Task");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield (0, typeorm_1.createConnection)({
        type: "postgres",
        database: "todolist-graphql-db",
        entities: [Task_1.Task],
        logging: true,
        synchronize: true,
        username: "postgres",
        password: "12345678",
        port: 5432,
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: yield (0, type_graphql_1.buildSchema)({
            resolvers: [task_1.TaskResolver],
            validate: false,
        }),
        plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()],
    });
    yield apolloServer.start();
    const app = (0, express_1.default)();
    apolloServer.applyMiddleware({ app });
    app.get("/", (_req, res) => res.send("Hello World!"));
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});
main().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map