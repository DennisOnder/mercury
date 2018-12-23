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
const MainController_1 = require("../controllers/MainController");
class MainRoutes {
    constructor() {
        this.router = express.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => {
            MainController_1.mainController.root(req, res);
        });
    }
}
exports.mainRoutes = new MainRoutes().router;
//# sourceMappingURL=MainRoutes.js.map