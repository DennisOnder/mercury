// tslint:disable:no-console
// tslint:disable:quotemark

// Imports
import { Request, Response } from 'express';
import { validateInput } from '../utils/ValidateInput';

class AuthController {
  public register(req: Request, res: Response) {
    // Check user input
    const validationResult: any = validateInput.registration(req.body);
    if (validationResult === true) {
      // Register a user
      return res.status(200).send('Registered!');
    } else {
      // Return errors
      return res.status(400).json(validationResult);
    }
  }
}

export const authController = new AuthController();
