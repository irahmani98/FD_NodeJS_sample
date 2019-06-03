"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var app = require("./app");
var port = process.env.Port || 3000;
var server = http.createServer(app);
server.listen(port);
