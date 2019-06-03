"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
var express = require("express");
var bodyParser = require('body-parser');
// Create a new express application instance
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var v1Route = require('./api/v1');
var v2Route = require('./api/v2');
app.use('/api/v1', v1Route);
app.use('/api/v2', v2Route);
module.exports = app;
