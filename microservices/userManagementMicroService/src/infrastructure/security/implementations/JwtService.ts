import { IJwtService } from "../IJwtService";

export class JwtService implements IJwtService {

    private static instance: JwtService;
    private secret: string;

    constructor (){
        this.secret = "kdks0wsoxlsxç";
    }

    public static getInstance(): JwtService {
        if (!JwtService.instance){
            JwtService.instance = new JwtService();
        }

        return JwtService.instance;
    }

    public generateToken(payload: object, expiresIn?: string): string {
        return "";
    }
}
