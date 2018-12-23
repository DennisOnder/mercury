// tslint:disable:no-console
// tslint:disable:quotemark

// Imports
import * as express from 'express';
import { authController } from '../controllers/AuthController';
import { testController } from '../controllers/TestController';

class MainRoutes {
  public router: express.Router = express.Router();
  constructor() {
    this.config();
  }
  private config(): void {
    this.router.get('/test', (req: express.Request, res: express.Response) => {
      testController.root(req, res);
    });
    this.router.post('/register', (req: express.Request, res: express.Response) => {
      authController.register(req, res);
    });
  }
}

export const mainRoutes = new MainRoutes().router;
