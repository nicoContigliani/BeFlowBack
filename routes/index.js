var express = require('express');
var router = express.Router();

const pay = require('../apiservices/pay/payRoutes')


/* GET home page. */
router.use('/', pay);
// router.get('/payments', function (req, res, next) {
//     res.send('live!!!');
// });

module.exports = router;
