const { Router } = require('express');
const router = Router();
const { listPostDetail } = require('../controllers/reproducaoController')

router.post('/posts', listPostDetail);


module.exports = router;