import http = require('http');
import app = require('./app');
const port = process.env.Port || 3000;

const server = http.createServer(app);

server.listen(port);
