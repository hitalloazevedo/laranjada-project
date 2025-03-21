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
exports.InMemoryUserRepository = void 0;
const User_1 = require("../../entities/User");
class InMemoryUserRepository {
    constructor() {
        this.usersList = [];
    }
    save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            this.usersList.push(user);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.usersList;
        });
    }
    findByEmail(email) {
        throw new Error("Method not implemented.");
    }
    findById(id) {
        throw new Error("Method not implemented.");
    }
    update(id, user) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
exports.InMemoryUserRepository = InMemoryUserRepository;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const repository = new InMemoryUserRepository();
        const user = new User_1.User('name', 'phone', 'email', 'password', 'image');
        yield repository.save(user);
        const users = yield repository.findAll();
        console.log(users);
    });
}
main();
