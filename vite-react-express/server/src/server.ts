import express, { Express, Request, Response } from "express";
import path from "path";

const app: Express = express();
const port = process.env.PORT || 5000;

const clientDir = path.resolve(__dirname, "..", "..", "client", "build");

app.use(express.static(clientDir));

app.get("/api", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server!");
});

app.get("/*", (_, res: Response) => {
  res.sendFile(path.resolve(clientDir, "index.html"));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
