// tslint:disable:no-console
// tslint:disable:quotemark
import express from 'express';
const app = express();
const port = process.env.PORT || 8000;

// Test route
app.get('/test', (req, res) => {
  return res.status(200).send('Green light');
});

// Server
app.listen(port, () => console.log(`Server is running on port: ${port}!`));
