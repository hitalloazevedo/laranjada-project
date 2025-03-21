"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Extract data from request body
                const { name, phone, email, password, image } = request.body;
                // Validate required fields
                if (!name || !email || !password || !phone) {
                    return response.status(400).json({
                        success: false,
                        message: 'Missing required fields'
                    });
                }
                // Execute use case
                const result = yield this.createUserUseCase.execute({
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
            }
            catch (error) {
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
        });
    }
}
exports.CreateUserController = CreateUserController;
