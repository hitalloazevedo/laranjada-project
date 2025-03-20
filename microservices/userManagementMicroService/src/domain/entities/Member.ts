import { User } from "./User";

export class Member extends User {
    private receivedOranges: number;
    private groupId: number;
    private role: string;

    constructor(
        id: number,
        name: string,
        phone: string,
        email: string,
        password: string,
        givenOranges: number,
        image: string,
        receivedOranges: number,
        groupId: number,
        role: string
    ) {
        super(id, name, phone, email, password, givenOranges, image);
        this.receivedOranges = receivedOranges;
        this.groupId = groupId;
        this.role = role;
    }

    public getReceivedOranges(): number {
        return this.receivedOranges;
    }

    public getGroupId(): number {
        return this.groupId;
    }

    public getRole(): string {
        return this.role;
    }

    public setReceivedOranges(oranges: number): void {
        this.receivedOranges = oranges;
    }

    public setGroupId(id: number): void {
        this.groupId = id;
    }

    public setRole(role: string): void {
        this.role = role;
    }

    public receiveOrange(): void {
        this.receivedOranges++;
    }
}