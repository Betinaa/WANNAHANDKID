const { Router } = require('express');
const router = Router();
const { listPosts, storePost, listPostsUser } = require('../controllers/postController')
const upload = require('../config/multer');

router.get('/posts', listPosts);
router.post('/post/create', upload.single('file'), storePost);
router.get('/posts/:id', listPostsUser);

module.exports = router;