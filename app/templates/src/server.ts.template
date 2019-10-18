import dotenv from "dotenv";
import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import routes from "./services";
import { connectDb } from "./models/index";

dotenv.config();

process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});

process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const PORT = process.env.SERVER_PORT;
const server = http.createServer(router);

connectDb().then( async () => {
    server.listen(PORT, () =>
        console.log(`Server is running http://localhost:${PORT}...`)
    );
})