// tslint:disable:no-console
// tslint:disable:quotemark
// tslint:disable:no-var-requires

// Imports
import * as dotenv from 'dotenv';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import app from './index';

// Initialize config file
dotenv.config();

// HTTP Module
const http = require('http').Server(app);

// Socket.io Server
const io = require('socket.io')(http);

// Web Socket
io.on('connection', (socket: any) => {
  console.log('Socket.io: Connection Establishd.');
  socket.on('greeter', (data: any) => {
    console.log(data);
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
