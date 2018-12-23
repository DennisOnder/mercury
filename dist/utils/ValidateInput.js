"use strict";
// tslint:disable:quotemark
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const Validator = __importStar(require("validator"));
class ValidateInput {
    registration(newUser) {
        const errors = {};
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
        }
        else {
            return true;
        }
    }
}
exports.validateInput = new ValidateInput();
//# sourceMappingURL=ValidateInput.js.map