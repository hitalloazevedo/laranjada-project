import { Router } from 'express';
import { createUserController } from '../application/useCases/createUser';

// Initialize router instance
const userRouter = Router();

// Route: Create User
// Method: POST
// Path: /user
// Description: Creates a new user in the system
userRouter.post("/user", (req, res) => {
    createUserController.handle(req, res);
})

export { userRouter };