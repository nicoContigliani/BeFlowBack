const express = require('express');
const router = express.Router();


const pay = require('../pay/payController');

router.get('/payments/:id', pay.getID);
router.get('/payments', pay.get);
router.post('/payments', pay.save);
router.delete('/payments/:id', pay.deletes);

// // router.get('/:id', posts.get);
// router.post('/', posts.save);
// router.delete('/:id', posts.deletes);
// router.post('/:id', posts.update);






/* GET bugdes listing. */
// router.delete('/payments/:id', function (req, res, next) {
//     res.send('llego!!!');
// });


module.exports = router;
