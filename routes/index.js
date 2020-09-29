var express = require('express');
var router = express.Router();
var studentController = require('./../controllers/StudentController');

router.get('/', studentController.view);
router.get('/add', studentController.add);
router.post('/store', studentController.store);
router.get('/edit/:id', studentController.edit);
router.post('/update/:id', studentController.update);
router.post('/delete/:id', studentController.delete);

module.exports = router;
