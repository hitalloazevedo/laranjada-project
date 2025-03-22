import { Router } from "express";
import { loginController } from "../application/useCases/login";

const authRouter = Router();

authRouter.post("/signin", (req, res, next) => {
    loginController.handle(req, res, next)
})

export { authRouter };