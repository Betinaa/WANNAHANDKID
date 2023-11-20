const { Router } = require('express');
const router = Router();
const { listPosts, storePost } = require('../controllers/postController')
const upload = require('../config/multer');

router.get('/posts', listPosts);
router.post('/post/create', upload.single('video'), storePost);

module.exports = router;