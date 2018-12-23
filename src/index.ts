// tslint:disable:no-console
// tslint:disable:quotemark

// Imports
import dotenv from 'dotenv';
import express from 'express';

// Initialize config file
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

// Test route
app.get('/test', (req, res) => {
  return res.status(200).send('Green light');
});

// Server
app.listen(port, () => console.log(`Server is running on port: ${port}!`));
