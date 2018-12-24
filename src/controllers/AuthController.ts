// tslint:disable:no-console
// tslint:disable:quotemark
// tslint:disable:arrow-parens
// tslint:disable:no-shadowed-variable

// Imports
import * as bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import IUser = require('../interfaces/IUser');
import User from '../models/User';
import { validateInput } from '../utils/ValidateInput';
class AuthController {
  public register(req: Request, res: Response) {
    // Check user input
    const tempUser: IUser = {
      confirmPassword: req.body.confirmPassword,
      password: req.body.password,
      username: req.body.username
    };
    const validationResult: any = validateInput.registration(tempUser);
    if (validationResult === true) {
      // Check for existing user
      User.findOne({ username: tempUser.username }, (err, user) => {
        if (err) {
          throw err;
        } else {
          if (!user) {
            // Register a user
            const newUser = new User({ password: tempUser.password, username: tempUser.username });
            bcrypt.genSalt(10, (err, salt) => {
              if (err) {
                throw err;
              } else {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) {
                    throw err;
                  } else {
                    newUser.password = hash;
                    newUser.save();
                    return res.status(200).json(newUser);
                  }
                });
              }
            });
          } else {
            return res.status(400).send('User Already Exists.');
          }
        }
      });
    } else {
      // Return errors
      return res.status(400).json(validationResult);
    }
  }
}

export const authController = new AuthController();
