"use strict";
// tslint:disable:no-console
// tslint:disable:quotemark
// tslint:disable:arrow-parens
// tslint:disable:no-shadowed-variable
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const bcrypt = __importStar(require("bcryptjs"));
const User = require("../models/User");
const ValidateInput_1 = require("../utils/ValidateInput");
class AuthController {
    register(req, res) {
        // Check user input
        const tempUser = {
            confirmPassword: req.body.confirmPassword,
            password: req.body.password,
            username: req.body.username
        };
        const validationResult = ValidateInput_1.validateInput.registration(tempUser);
        if (validationResult === true) {
            // Check for existing user
            User.find({ username: tempUser.username })
                .then(user => {
                if (!user) {
                    // Register a user
                    const newUser = new User({ password: tempUser.password, username: tempUser.username });
                    bcrypt.genSalt(10, (err, salt) => {
                        if (err) {
                            throw err;
                        }
                        else {
                            bcrypt.hash(newUser.password, salt, (err, hash) => {
                                if (err) {
                                    throw err;
                                }
                                else {
                                    newUser.password = hash;
                                    newUser.save();
                                    return res.status(200).json(newUser);
                                }
                            });
                        }
                    });
                }
                else {
                    return res.status(400).send('User Already Exists.');
                }
            });
        }
        else {
            // Return errors
            return res.status(400).json(validationResult);
        }
    }
}
exports.authController = new AuthController();
//# sourceMappingURL=AuthController.js.map