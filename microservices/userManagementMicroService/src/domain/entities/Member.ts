import { User } from "./User";

export class Member extends User {
    private groupId: number;
    private role: string

    constructor(
        name: string,
        phone: string,
        email: string,
        password: string,
        image: string,
        groupId: number,
    ) {
        super(name, phone, email, password, image);
        this.groupId = groupId;
        this.role = "member";
    }


    public getGroupId(): number {
        return this.groupId;
    }

    public getRole(): string {
        return this.role;
    }
    public setGroupId(id: number): void {
        this.groupId = id;
    }

}