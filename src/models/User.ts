// tslint:disable:no-console
// tslint:disable:quotemark

// Imports
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  password: {
    required: true,
    type: String
  },
  username: {
    required: true,
    type: String
  }
});
