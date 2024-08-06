import express from "express";
const router = express.Router();

import { signupUsingNameEmailPhonePassword } from "../controllers/user.register.controller.js";

router.post("/signupUsingNameEmailPhonePassword", signupUsingNameEmailPhonePassword);
export default router;
