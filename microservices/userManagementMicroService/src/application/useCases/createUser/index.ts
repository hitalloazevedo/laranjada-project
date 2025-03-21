import { InMemoryUserRepository} from '../../../domain/repositories/implementations/InMemoryUserRepository';
import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserController } from './CreateUserController';

const userRepo = new InMemoryUserRepository();
const createUserUseCase = new CreateUserUseCase(userRepo);
const createUserController = new CreateUserController(createUserUseCase);
export {createUserController};