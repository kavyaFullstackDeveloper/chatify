import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", express.json(), signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;