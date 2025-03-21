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
exports.CreateUserUseCase = void 0;
const User_1 = require("../../../domain/entities/User");
class CreateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            // Desestruturar dados do usuário
            const { name, phone, email, password, image } = userData;
            const user = new User_1.User(name, phone, email, password, image);
            const userExists = yield this.userRepository.findByEmail(email);
            if (userExists) {
                //Break sem usar else
                throw new Error('User already exists');
            }
            // Salvar usuário
            yield this.userRepository.save(user);
        });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
