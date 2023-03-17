import express, { Express, Request, Response, Router } from "express";
import { __clientdir, __publicdir } from "../utils/dir-names";

const mode = process.env.NODE_ENV || "development";

const router: Router = Router();
router.use(express.static(__clientdir));

export default router;
