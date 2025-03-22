import { LoginDTO } from "./LoginDTO";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { IJwtService } from "../../../infrastructure/security/IJwtService";
import { NotFoundError, UnauthorizedError } from "../../../errors/AppError";

export class LoginUseCase {

    constructor(
        private userRepository: IUserRepository,
        private jwtService: IJwtService
    ) {}
  
    async execute(data: LoginDTO): Promise<string> {

      const user = await this.userRepository.findByEmail(data.email);

      if (!user) {
        throw new NotFoundError('User not found');
      }
  
      if (!user.comparePassowrd(data.password)) { // Em produção, use bcrypt para comparar senhas
        throw new UnauthorizedError('Invalid credentials');
      }
  
      return this.jwtService.generateToken( { email: user.getEmail() } , '1h' );
    }
  }