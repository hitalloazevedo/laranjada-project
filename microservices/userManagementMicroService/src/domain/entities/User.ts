import { v4 as uuidv4} from 'uuid';
export class User {
    private readonly uuid: string;
    private name: string;
    private phone: string;
    private email: string;
    private password: string;
    private givenOranges: number;
    private image: string;

    constructor(name: string, phone: string, email: string, password: string, image: string) {
        this.uuid = uuidv4();
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.givenOranges = 0;
        this.image = image;
    }

    // Getters
    public getId(): string {
        return this.uuid;
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

    public comparePassowrd(password: string): boolean {
        return this.password === password;
    }
}