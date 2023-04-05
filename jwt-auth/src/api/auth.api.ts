import express, { Router } from "express";
import { login, register } from "../controllers/auth.controller";
const router: Router = express();

// handle log in
router.route("/login").post(login);

router.route("/register").post(register);

export default router;
