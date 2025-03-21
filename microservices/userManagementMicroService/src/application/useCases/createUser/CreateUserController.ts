import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';
import { ICreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            // Extract data from request body
            const { name, phone, email, password, image }:ICreateUserRequestDTO = request.body;

            // Validate required fields
            if (!name || !email || !password || !phone) {
                return response.status(400).json({
                    success: false,
                    message: 'Missing required fields'
                });
            }

            // Execute use case
            const result = await this.createUserUseCase.execute({
                name,
                phone,
                email,
                password,
                image,
            });

            // Return success response
            return response.status(201).json({
                success: true,
                message: 'User created successfully',
                data: result
            });

        } catch (error) {
            // Handle errors
            if (error instanceof Error) {
                return response.status(500).json({
                    success: false,
                    message: error.message
                });
            }
            return response.status(500).json({
                success: false,
                message: 'Internal server error'
            });
        }
    }
}