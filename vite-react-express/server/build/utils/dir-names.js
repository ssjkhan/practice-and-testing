"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.__publicdir = exports.__clientdir = void 0;
const path_1 = __importDefault(require("path"));
exports.__clientdir = path_1.default.resolve(__dirname, "..", "..", "client", "build");
exports.__publicdir = path_1.default.resolve(__dirname, "..", "..", "client", "public");