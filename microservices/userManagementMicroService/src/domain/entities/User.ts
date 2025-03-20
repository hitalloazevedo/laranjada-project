export class User {
    private id: number;
    private name: string;
    private phone: string;
    private email: string;
    private password: string;
    private givenOranges: number;
    private image: string;

    constructor(id: number, name: string, phone: string, email: string, password: string, givenOranges: number, image: string) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.givenOranges = givenOranges;
        this.image = image;
    }

    // Getters
    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getPhone(): string {
        return this.phone;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }

    public getGivenOranges(): number {
        return this.givenOranges;
    }

    public getImage(): string {
        return this.image;
    }


    // Setters
    public setId(id: number): void {
        this.id = id;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setPhone(phone: string): void {
        this.phone = phone;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public setGivenOranges(givenOranges: number): void {
        this.givenOranges = givenOranges;
    }

    public setImage(image: string): void {
        this.image = image;
    }
}