// tslint:disable:quotemark

// Imports
import * as Validator from 'validator';
import { InterfaceUser } from '../interfaces/InterfaceUser';

class ValidateInput {
  public registration(newUser: InterfaceUser) {
    const errors: any = {};
    if (Validator.isEmpty(newUser.username)) {
      errors.usernameEmpty = 'Username Is Required.';
    }
    if (!Validator.isLength(newUser.username, { min: 5, max: 16 })) {
      errors.usernameLength = 'Username Length Should Be Between 5 And 16 Characters Long.';
    }
    if (Validator.isEmpty(newUser.password)) {
      errors.passwordEmpty = 'Password Is Required.';
    }
    if (!Validator.isLength(newUser.password, { min: 8, max: 32 })) {
      errors.passwordLength = 'Password Length Should Be Between 8 And 32 Characters Long.';
    }
    if (newUser.password !== newUser.confirmPassword) {
      errors.passwordNotMatching = 'Passwords Are Not Matching.';
    }
    if (Reflect.ownKeys(errors).length > 0) {
      return errors;
    } else {
      return true;
    }
  }
}

export const validateInput = new ValidateInput();
