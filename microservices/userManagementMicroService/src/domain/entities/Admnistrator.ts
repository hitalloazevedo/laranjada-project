import { User } from "./User";

export class Administrator extends User {
    private adminLevel: number;
    private managedGroups: number[];

    constructor(
        id: number,
        name: string,
        phone: string,
        email: string,
        password: string,
        givenOranges: number,
        image: string,
        adminLevel: number,
        managedGroups: number[]
    ) {
        super(id, name, phone, email, password, givenOranges, image);
        this.adminLevel = adminLevel;
        this.managedGroups = managedGroups;
    }

    public getAdminLevel(): number {
        return this.adminLevel;
    }

    public getManagedGroups(): number[] {
        return this.managedGroups;
    }

    public setAdminLevel(level: number): void {
        this.adminLevel = level;
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