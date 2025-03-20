import { User } from "./User";

export class Laranjada {
    private members: User[];
    private name: string;
    private id: number;
    private totalOranges: number;
    private totalReceivedOranges: number;

    constructor(members: User[], name: string, id: number, totalOranges: number, totalReceivedOranges: number) {
        this.members = members;
        this.name = name;
        this.id = id;
        this.totalOranges = totalOranges;
        this.totalReceivedOranges = totalReceivedOranges;
    }

    // Getters
    public getMembers(): User[] {
        return this.members;
    }

    public getName(): string {
        return this.name;
    }

    public getId(): number {
        return this.id;
    }

    public getTotalOranges(): number {
        return this.totalOranges;
    }

    public getTotalReceivedOranges(): number {
        return this.totalReceivedOranges;
    }

    // Setters
    public setMembers(members: User[]): void {
        this.members = members;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public setTotalOranges(totalOranges: number): void {
        this.totalOranges = totalOranges;
    }

    public setTotalReceivedOranges(totalReceivedOranges: number): void {
        this.totalReceivedOranges = totalReceivedOranges;
    }

    public addMember(user: User) {
        this.members.push(user);
    }

    public removeMember(user: User) {
        this.members = this.members.filter(member => member.getId() != user.getId());
    }
}