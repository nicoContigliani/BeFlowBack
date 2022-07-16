const express = require('express');
const router = express.Router();


const pay = require('../pay/payController');


// /* GET bugdes listing. */
//  router.put('/payments/:id', function (req, res, next) {
//      res.send('llego!!!');
//  });



router.get('/payments/:id', pay.getID);
router.post('/payments', pay.getPage);
router.post('/paymentss', pay.save);
router.delete('/payments/:id', pay.deletes);
router.put('/payments/:id', pay.update);
// router.post('/:id', posts.update);


// // router.get('/:id', posts.get);
// router.post('/', posts.save);
// router.delete('/:id', posts.deletes);
// router.post('/:id', posts.update);









module.exports = router;
