// tslint:disable:no-console
// tslint:disable:quotemark

// Imports
import { Request, Response } from 'express';

export class TestController {
  public test(req: Request, res: Response) {
    const tempTime = new Date(Date.now());
    const currentTime: string = `${tempTime.getUTCHours()}:${tempTime.getUTCMinutes()} UTC.`;
    res.status(200).send(`Status - 200, Success: ${currentTime}`);
  }
}

export const testController = new TestController();
