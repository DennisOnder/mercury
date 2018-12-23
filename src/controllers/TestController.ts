// tslint:disable:no-console
// tslint:disable:quotemark

// Imports
import { Request, Response } from 'express';

export class TestController {
  public root(req: Request, res: Response) {
    res.status(200).send('Success');
  }
}

export const testController = new TestController();
