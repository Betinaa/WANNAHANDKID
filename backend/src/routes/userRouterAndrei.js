const { Router } = require('express');
const router = Router();
const { listUsers, storeUser } = require('../controllers/usersController')
const userRouter = require('./routes/usersRouter');

router.get('/users', listUsers);
router.post('/user/create', storeUser);
app.use('/api', userRouter);


module.exports = router;