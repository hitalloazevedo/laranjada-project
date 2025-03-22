export interface IJwtService {
    generateToken(payload: object, expiresIn?: string): string;
}