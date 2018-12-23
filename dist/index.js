"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-console
// tslint:disable:quotemark
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 8000;
// Test route
app.get('/test', (req, res) => {
    return res.status(200).send('Green light');
});
// Server
app.listen(port, () => console.log(`Server is running on port: ${port}!`));
//# sourceMappingURL=index.js.map