import { User } from "./User";

export class Administrator extends User {
    private managedGroups: number[];
    private role: string;

    constructor(
        name: string,
        phone: string,
        email: string,
        password: string,
        image: string,
        managedGroups: number[]
    ) {
        super(name, phone, email, password, image);
        this.role = "admin";
        this.managedGroups = managedGroups;
    }

    public getManagedGroups(): number[] {
        return this.managedGroups;
    }

    public setManagedGroups(groups: number[]): void {
        this.managedGroups = groups;
    }

    public addManagedGroup(groupId: number): void {
        this.managedGroups.push(groupId);
    }

    public removeManagedGroup(groupId: number): void {
        this.managedGroups = this.managedGroups.filter(id => id !== groupId);
    }
}