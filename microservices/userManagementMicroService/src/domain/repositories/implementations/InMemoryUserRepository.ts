import { Member } from "../../entities/Member";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class InMemoryUserRepository implements IUserRepository {

    private usersList: Array<User>;

    constructor(){
        this.usersList = [];
        this.usersList.push(new Member("hitallo", "234", "hitallo@gmail.com", "1234", "", 4))
    }
    
    async save(user: User): Promise<void> {
        this.usersList.push(user);
    }
    
    async findAll(): Promise<User[]> {
        return this.usersList;
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.usersList.filter(user => user.getEmail() == email)[0];
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
