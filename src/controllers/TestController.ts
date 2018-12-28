// tslint:disable:no-console
// tslint:disable:quotemark

// Imports
import { Request, Response } from 'express';

export class TestController {
  public test(req: Request, res: Response) {
    const tempTime = new Date(Date.now());
    const currentTime = tempTime.getHours() + ':' + tempTime.getSeconds();
    res.status(200).send(`Success: ${currentTime}`);
  }
}

export const testController = new TestController();
