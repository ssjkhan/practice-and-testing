import express, { Express, NextFunction, Request, Response } from "express";
import GeneralMiddleware from "@middleware/general.middleware";
import { GetApplicationMode } from "@utils/mode.util";
import {
  ServeClient,
  ServeClientStaticAssets,
} from "@middleware/client.middleware";
import EnvInit from "@middleware/env.middleware";
import ProtectedApi from "./api/v2.api";
import AuthApi from "./api/auth.api";

// initialize server variables
EnvInit();
const port = process.env.PORT || 3000;
const mode = GetApplicationMode();
const server: Express = express();

//intialize server
server.use(ServeClientStaticAssets());
server.use(GeneralMiddleware);

// sample api route
server.get("/api/v1", (_: Request, res: Response) => {
  res.json({
    project: "Typescript, React and Express Boilerplate",
    from: "ssjkhan",
  });
});

server.use("/api/auth", AuthApi);

server.use("/api/v2", ProtectedApi);

// serving client and listening on port
server.use("/", (_: Request, __: Response, next: NextFunction) => {
  console.log("Serving client");
  next();
}, ServeClient);
server.listen(
  port,
  () => {
    console.log(
      `[server]: Server is running at http://localhost:${port} in ${mode} mode`,
    );
  },
);
