import { User } from "../entities/User"

export interface UserRepository {
    save(user: User): Promise<void>;
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    update(id: number, user: Partial<User>): Promise<void>;
    delete(id: number): Promise<void>;
}