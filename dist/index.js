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
const bodyParser = __importStar(require("body-parser"));
const express_1 = __importDefault(require("express"));
const MainRoutes_1 = require("./routes/MainRoutes");
class App {
    constructor() {
        this.app = express_1.default();
        this.config();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use('/api', MainRoutes_1.mainRoutes);
    }
}
exports.default = new App().app;
//# sourceMappingURL=index.js.map