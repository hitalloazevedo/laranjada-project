import { LoginController } from "./LoginController";
import { LoginUseCase } from "./LoginUseCase";
import { InMemoryUserRepository } from "../../../domain/repositories/implementations/InMemoryUserRepository";
import { JwtService } from "../../../infrastructure/security/implementations/JwtService";

const jwtService = JwtService.getInstance();

const userRepository = new InMemoryUserRepository();
const loginUseCase = new LoginUseCase(userRepository, jwtService);
const loginController = new LoginController(loginUseCase);

export { loginController };