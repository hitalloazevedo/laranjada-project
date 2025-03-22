import { Request, Response, NextFunction } from 'express';
import { LoginUseCase } from './LoginUseCase';
import { LoginDTO } from './LoginDTO';

export class LoginController {

  constructor(private loginUseCase: LoginUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {

      const { email, password } = req.body;
      const dto = new LoginDTO(email, password);
      const token = await this.loginUseCase.execute(dto);
      return res.json({ token });

    } catch (error) {
      next(error);
    }
  }
}