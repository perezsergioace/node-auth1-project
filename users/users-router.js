const router = require('express').Router();
// const bcrypt = require('bcryptjs');

const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware');

router.get('/', restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(error => {
            res.status(500).json({error: "Error retrieving users"})
        })
})

module.exports = router;