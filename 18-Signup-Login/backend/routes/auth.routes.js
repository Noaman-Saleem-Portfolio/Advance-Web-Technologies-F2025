import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";


import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", protectRoute, logout);

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);

export default router; 