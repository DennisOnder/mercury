// tslint:disable:no-console
// tslint:disable:quotemark

// Imports
import * as express from 'express';
import passport = require('passport');
import { authController } from '../controllers/AuthController';
import { testController } from '../controllers/TestController';

class MainRoutes {
  public router: express.Router = express.Router();
  constructor() {
    this.config();
  }
  private config(): void {
    this.router.get('/test', (req: express.Request, res: express.Response) => {
      testController.test(req, res);
    });
    this.router.post('/register', (req: express.Request, res: express.Response) => {
      authController.register(req, res);
    });
    this.router.post('/login', (req: express.Request, res: express.Response) => {
      authController.login(req, res);
    });
    this.router.get('/current',
      passport.authenticate('jwt', { session: false }),
      (req: express.Request, res: express.Response) => {
        authController.current(req, res);
    });
  }
}

export const mainRoutes = new MainRoutes().router;
