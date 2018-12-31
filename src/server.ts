// tslint:disable:no-console
// tslint:disable:quotemark
// tslint:disable:no-var-requires

// Imports
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './index';
import IMessage from './interfaces/IMessage';
import { validateInput } from './utils/ValidateInput';

// Initialize config file
dotenv.config();

// HTTP Module
const http = require('http').Server(app);

// Socket.io Server
const io = require('socket.io')(http);

// Socket.io Config
io.on('connection', (socket: any) => {
  console.log('Socket.io: Connection Establishd.');
  socket.on('newMessage', (data: any) => {
    const isValid = validateInput.message(data);
    if (isValid === true) {
      // Send the message to the database
      console.log(data);
    } else {
      // Send the errors
      console.log(isValid);
    }
  });
});

// Mongoose
mongoose.connect(process.env.MONGO_URI,
  { useNewUrlParser: true }, (err: any): void => {
    if (err) {
      throw err;
    } else {
      console.log('MongoDB Connected.');
    }
  });

// Server
http.listen(process.env.SERVER_PORT, () => console.log(`Server Running: http://localhost:${process.env.SERVER_PORT}/`));
