// tslint:disable:no-console
// tslint:disable:quotemark

// Imports
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './index';

// Initialize config file
dotenv.config();

// Mongoose
mongoose.connect(process.env.MONGO_URI,
  { useNewUrlParser: true }, (err): void => {
    if (err) {
      throw err;
    } else {
      console.log('MongoDB Connected.');
    }
  });

// Server
app.listen(process.env.SERVER_PORT, () => console.log(`Listening at http://localhost:${process.env.SERVER_PORT}/`));
