// lib/app.ts
import express = require('express');
var bodyParser = require('body-parser');

// Create a new express application instance
const app: express.Application = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const v1Route = require('./api/v1');
const v2Route = require('./api/v2');

app.use('/api/v1', v1Route);
app.use('/api/v2', v2Route);


module.exports = app;



