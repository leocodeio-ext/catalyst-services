import express from "express";
const router = express.Router();

import { signupUsingNameEmailPhonePassword, sigupusingEmailPassword, sigupusingNamePassword } from "../controllers/user.register.controller.js";

router.post("/signupUsingNameEmailPhonePassword", signupUsingNameEmailPhonePassword);
router.post("/signupUsingEmailPassword",sigupusingEmailPassword)
router.post("/signupUsingNamePassword",sigupusingNamePassword)
export default router;
