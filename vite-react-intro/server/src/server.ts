import express, { Express, Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";
import AssetRouter from "./middleware/asset-router";

// First find out the __dirname, then resolve to one higher level in the dir tree
const __rootname = path.resolve(__dirname, "../../");
const publicpath = path.resolve(__rootname, "client", "public");

const app: Express = express();
// console.log(__rootname);
console.log(publicpath);

app.use(express.static(path.join(__rootname, "client", "public")));
app.use("/src", AssetRouter);
app.get("/api/v1", (_, res: Response) => {
  res.json({
    "project": "Vite, Express",
    "from": "ssjkhan",
  });
});

app.get("/*", (_, res: Response) => {
  res.sendFile(path.join(__rootname, "client", "public", "index.html"));
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TS Server");
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
