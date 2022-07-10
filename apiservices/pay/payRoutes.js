const express = require('express');
const router = express.Router();


 const pay = require('../pay/payController');

//  router.get('/', pay.get);
 router.get('/payments', pay.get);



// // router.get('/:id', posts.get);
// router.post('/', posts.save);
// router.delete('/:id', posts.deletes);
// router.post('/:id', posts.update);






/* GET bugdes listing. */
// router.get('/', function (req, res, next) {
//     res.send('llego!!!');
// });


module.exports = router;
