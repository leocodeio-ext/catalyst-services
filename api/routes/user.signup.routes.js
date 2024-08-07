import express from "express";
const router = express.Router();

import { signupUsingNameEmailPhonePassword, sigupusingEmailPassword } from "../controllers/user.register.controller.js";

router.post("/signupUsingNameEmailPhonePassword", signupUsingNameEmailPhonePassword);
router.post("/signupUsingEmailPassword",sigupusingEmailPassword)
export default router;
