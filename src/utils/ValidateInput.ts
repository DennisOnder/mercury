// tslint:disable:quotemark
import * as Validator from 'validator';

class ValidateInput {
  public errors: any;
  public registration(data: any) {
    if (Validator.isEmpty(data.username)) {
      this.errors.usernameEmpty = 'Username Is Required.';
    }
    if (!Validator.isLength(data.username, { min: 5, max: 16 })) {
      this.errors.usernameLength = 'Username Length Should Be Between 5 And 16 Characters Long.';
    }
    if (Validator.isEmpty(data.password)) {
      this.errors.passwordEmpty = 'Password Is Required.';
    }
    if (!Validator.isLength(data.password, { min: 8, max: 32 })) {
      this.errors.passwordLength = 'Password Length Should Be Between 8 And 32 Characters Long.';
    }
    if (data.password !== data.confirmPassword) {
      this.errors.passwordNotMatching = 'Passwords Are Not Matching.';
    }
    if (Reflect.ownKeys(this.errors).length > 0) {
      return this.errors;
    } else {
      return true;
    }
  }
}

export const validateInput = new ValidateInput();
