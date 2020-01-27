const router = require('express').Router();

const usersRouter = require('../users/users-router');

router.use('/users', usersRouter);

router.use('/', (req, res) => {
    res.json({ api: "It's alive"});
});

module.exports = router;