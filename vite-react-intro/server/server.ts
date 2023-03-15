import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TS Server");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
