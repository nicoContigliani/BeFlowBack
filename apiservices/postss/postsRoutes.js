const express = require('express');
const router = express.Router();


const posts = require('./postsController');

router.get('/', posts.get);
// router.get('/:id', posts.get);
router.post('/', posts.save);
router.delete('/:id', posts.deletes);
router.post('/:id', posts.update);






// /* GET bugdes listing. */
// router.get('/posts', function (req, res, next) {
//     res.send('live!!!');
// });


module.exports = router;
