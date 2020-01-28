const router = require('express').Router();

const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');

router.use('/', authRouter);
// router.use('/users', usersRouter);

router.use('/', (req, res) => {
    res.json({ api: "It's alive"});
});

module.exports = router;