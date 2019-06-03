import express = require('express');

const router = express.Router();

router.post('/', (req, res, next) => {
    let filler1: string = '0000';
    let filler2: string = '000';
    var rec =  req.body.data;
    res.send(
        res.status(200).json({
            statusCode: 200,
            data:  {
                firstName: rec.substr(0, rec.indexOf(filler1)),
                lastName: rec.substr(rec.indexOf(filler1) + 4, (rec.lastIndexOf(filler2)- (rec.indexOf(filler1) + 4))),
                clientId: rec.substr(rec.indexOf('999'), 3) + '-' + rec.substr(rec.indexOf('999') + 3)
            }
    }));
       
});

module.exports = router;