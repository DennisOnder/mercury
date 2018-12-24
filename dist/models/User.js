"use strict";
// tslint:disable:no-console
// tslint:disable:quotemark
// Imports
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    password: {
        required: true,
        type: String
    },
    username: {
        required: true,
        type: String
    }
});
const User = mongoose.model('User', userSchema);
module.exports = User;
//# sourceMappingURL=User.js.map