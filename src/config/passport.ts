// tslint:disable:no-console
// tslint:disable:quotemark
// tslint:disable:arrow-parens
// tslint:disable:no-shadowed-variable

// Imports
import dotenv from 'dotenv';
import * as express from 'express';
import passport from 'passport';
import * as passportJWT from 'passport-jwt';
import User from '../models/User';

// Initialized config
dotenv.config();
export default class PassportJSConfig {
  public static init(app: express.Application) {
    app.use(passport.initialize());
    passport.use(new passportJWT.Strategy({
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET
    }, (payload: any, done: any) => {
      User.findById(payload.id, (err: any, user: any) => {
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    }));
  }
}
