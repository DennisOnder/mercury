// tslint:disable:no-console
// tslint:disable:quotemark

// Imports
import mongoose = require('mongoose');
import IUser = require('../interfaces/IUser');

interface IUserModel extends IUser, mongoose.Document { }

const userSchema = new mongoose.Schema({
  password: {
    required: true,
    type: String
  },
  username: {
    required: true,
    type: String
  }
});

const User = mongoose.model<IUserModel>('User', userSchema);

export = User;
