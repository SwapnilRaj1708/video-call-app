const http = require('http');
const express = require('express');
const config = require('../config');
const socket = require('./lib/socket');

const app = express();
const server = http.createServer(app);

// Enable trust proxy for ngrok
app.set('trust proxy', 1);

// Add CORS headers for ngrok
const allowedOrigins = [
  'https://0c71d7089982.ngrok-free.app',
  'http://localhost:9000',
  'http://localhost:5000'
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin) || !origin) {
    res.header('Access-Control-Allow-Origin', origin || '*');
  }
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use('/', express.static(`${__dirname}/../client/dist`));

server.listen(config.PORT, () => {
  socket(server);
  console.log('Server is listening at :', config.PORT);
  console.log('Ready for ngrok! Run: ngrok http', config.PORT);
});
