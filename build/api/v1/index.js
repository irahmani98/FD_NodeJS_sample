"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
router.post('/', function (req, res, next) {
    var filler1 = '0000';
    var filler2 = '000';
    var rec = req.body.data;
    res.send(res.status(200).json({
        statusCode: 200,
        data: {
            firstName: rec.substr(0, rec.indexOf(filler1) + 4),
            lastName: rec.substr(rec.indexOf(filler1) + 4, (rec.lastIndexOf(filler2) - 5)),
            clientId: rec.substr(17)
        }
    }));
});
module.exports = router;
