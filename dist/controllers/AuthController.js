"use strict";
// tslint:disable:no-console
// tslint:disable:quotemark
Object.defineProperty(exports, "__esModule", { value: true });
const ValidateInput_1 = require("../utils/ValidateInput");
class AuthController {
    register(req, res) {
        // Check user input
        const user = {
            confirmPassword: req.body.confirmPassword,
            password: req.body.password,
            username: req.body.username
        };
        const validationResult = ValidateInput_1.validateInput.registration(user);
        if (validationResult === true) {
            // Register a user
            return res.status(200).send('Registered!');
        }
        else {
            // Return errors
            return res.status(400).json(validationResult);
        }
    }
}
exports.authController = new AuthController();
//# sourceMappingURL=AuthController.js.map