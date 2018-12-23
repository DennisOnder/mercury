"use strict";
// tslint:disable:no-console
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
const express = __importStar(require("express"));
exports.auth = () => {
    const router = express.Router();
    router.get('/', (req, res) => {
        return res.status(200).send('Success!');
    });
};
//# sourceMappingURL=auth.js.map