const bcrypt = require('bcryptjs');
const router = require('express').Router();

const Users = require('../users/users-model');

router.post('/register', (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(req.body.password, 8);

    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({ message: `Welcome ${user.username}` })
            } else {
                res.status(401).json({ message: "You shall not pass!"});
            }
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.get('/users', (req, res) => {
    if (req.headers.authorization) {
        Users.findBy(req.headers.authorization)
            .first()
            .then(user => {
                if (user && bcrypt.compareSync(req.headers.authorization, user.username)) {
                    Users.find()
                } else {
                    res.status(401).json({error: "you shall not pass"})
                }
            })
            .catch(error => {
                res.status(400).json({error: "Error retrieving users"})
            })
    } else {
        res.status(400).json({ error: "missing header"})
    }
})

module.exports = router;