var express = require('express');
var router = express.Router();

const pay = require('../apiservices/pay/payRoutes')


/* GET home page. */
router.use('/', pay);
// router.get('/pay', function (req, res, next) {
//     res.send('live!!!');
// });

router.get("/pay", (req, res) => {
    res.status(200).json(tasks);
  });



module.exports = router;
