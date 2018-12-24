// tslint:disable:no-console
// tslint:disable:quotemark

// Imports
import * as bodyParser from 'body-parser';
import express from 'express';
import PassportJSConfig from './config/passport';
import { mainRoutes } from './routes/MainRoutes';
class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
  }
  private config(): void {
    this.app.set('port', process.env.SERVER_PORT);
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use('/api', mainRoutes);
    PassportJSConfig.init(this.app);
  }
}

export default new App().app;
