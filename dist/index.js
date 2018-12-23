"use strict";
// tslint:disable:no-console
// tslint:disable:quotemark
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const app = express_1.default();
const port = process.env.SERVER_PORT;
// Test route
app.get('/test', (req, res) => {
    return res.status(200).send('Green light');
});
// Server
app.listen(port, () => console.log(`Server is running on port: ${port}!`));
//# sourceMappingURL=index.js.map