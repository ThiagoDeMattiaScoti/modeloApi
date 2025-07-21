import { Router } from "express";
import { LoginController } from "../controllers/loginController";

const router= Router()

router.post('/login',LoginController.validateLogin)

export default router