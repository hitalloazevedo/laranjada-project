import { User } from "../../entities/User";
import { UserRepository } from "../UserRepository";

export class InMemoryUserRepository implements UserRepository {

    private usersList: Array<User>;

    constructor(){
        this.usersList = [];
    }

    async save(user: User): Promise<void> {
        this.usersList.push(user);
    }

    async findAll(): Promise<User[]> {
        return this.usersList;
    }

    findById(id: number): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    update(id: number, user: Partial<User>): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}