import { User } from "../../../domain/entities/User";

interface CreateUserRequest {
    name: string;
    phone: string;
    email: string;
    password: string;
    image: string;
}

interface CreateUserResponse {
    user: User;
}

export class CreateUserUseCase {
    constructor() {}

    async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
        const { name, phone, email, password, image } = request;

        // Create new user with default values for id and givenOranges
        const user = new User(
            Math.floor(Math.random() * 1000), // temporary ID generation
            name,
            phone,
            email,
            password,
            0, // initial givenOranges
            image
        );

        // Here you would typically:
        // 1. Validate the input data
        // 2. Check if user already exists
        // 3. Hash the password
        // 4. Save to database
        // 5. Handle errors

        return { user };
    }
}