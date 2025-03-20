import { Router } from 'express';
import { CreateUserController } from '../application/useCases/createUser/CreateUserController';

// Initialize router instance
const userRouter = Router();

// Route: Create User
// Method: POST
// Path: /user
// Description: Creates a new user in the system
userRouter.post("/user", (req, res) => {
    try {
        // Extract user data from request body
        const { name, email, password, phone, image } = req.body;

        // TODO: Validate input data
        if (!name || !email || !password) {
            return res.status(400).json({
                error: 'Missing required fields'
            });
        }

        // TODO: Call user creation use case
        // const createUserController = new CreateUserController();
        // const result = await createUserController.handle(req, res);

        // Temporary mock response
        return res.status(201).json({
            message: 'User created successfully',
            user: {
                id: Math.floor(Math.random() * 1000),
                name,
                email,
                phone,
                image,
                givenOranges: 0
            }
        });

    } catch (error) {
        // Error handling
        return res.status(500).json({
            error: 'Internal server error',
            message: error.message
        });
    }
});

export { userRouter };