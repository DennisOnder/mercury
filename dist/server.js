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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const dotenv = __importStar(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("./index"));
// Initialize config file
dotenv.config();
// Mongoose
mongoose_1.default.connect(process.env.MONGO_URI, { useNewUrlParser: true }, (err) => {
    if (err) {
        throw err;
    }
    else {
        console.log('MongoDB Connected.');
    }
});
// Server
index_1.default.listen(process.env.SERVER_PORT, () => console.log(`Listening at http://localhost:${process.env.SERVER_PORT}/`));
//# sourceMappingURL=server.js.map