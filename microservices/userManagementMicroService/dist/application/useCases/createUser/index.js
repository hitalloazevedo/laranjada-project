"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = void 0;
const InMemoryUserRepository_1 = require("../../../domain/repositories/implementations/InMemoryUserRepository");
const CreateUserUseCase_1 = require("./CreateUserUseCase");
const CreateUserController_1 = require("./CreateUserController");
const userRepo = new InMemoryUserRepository_1.InMemoryUserRepository();
const createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(userRepo);
const createUserController = new CreateUserController_1.CreateUserController(createUserUseCase);
exports.createUserController = createUserController;
