import { User } from "../../../domain/entities/User";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { UserRepository } from "../../../domain/repositories/UserRepository";


export class CreateUserUseCase {
    constructor(
        private userRepository: UserRepository
    ) {}

    async execute(userData: ICreateUserRequestDTO): Promise<void> {
        // Desestruturar dados do usuário
        const {name,phone,email,password,image} = userData;
        const user = new User(name,phone,email,password,image);

        const userExists = await this.userRepository.findByEmail(email);

        if (userExists) {
            //Break sem usar else
            throw new Error('User already exists');
        }

            // Salvar usuário
        await this.userRepository.save(user);
    }
}