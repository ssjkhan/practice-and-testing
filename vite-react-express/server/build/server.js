"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
const clientDir = path_1.default.resolve(__dirname, "..", "..", "client", "build");
app.use(express_1.default.static(clientDir));
app.get("/api", (req, res) => {
    res.send("Express + TypeScript Server!");
});
app.get("/*", (_, res) => {
    res.sendFile(path_1.default.resolve(clientDir, "index.html"));
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
