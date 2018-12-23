"use strict";
// tslint:disable:no-console
// tslint:disable:quotemark
Object.defineProperty(exports, "__esModule", { value: true });
class TestController {
    root(req, res) {
        res.status(200).send('Success');
    }
}
exports.TestController = TestController;
exports.testController = new TestController();
//# sourceMappingURL=TestController.js.map