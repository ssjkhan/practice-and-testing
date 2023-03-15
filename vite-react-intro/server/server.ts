import express, { Express, Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";
import AssetRouter from "./server/routers/asset-router";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Express = express();

app.use("/", express.static(path.join(__dirname, "../../public")));
app.use("/src", AssetRouter);

app.get("/api/v1", (_, res: Response) => {
  res.json({
    project: "vite-intro",
    from: "ssjkhan",
  });
});

app.get("/*", (_, res: Response) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const { PORT = 5174 } = process.env;

app.listen(PORT, () => {
  console.log();
  console.log(`  App running in port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
