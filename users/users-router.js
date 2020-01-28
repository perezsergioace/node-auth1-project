// const router = require('express').Router();
// const bcrypt = require('bcryptjs');

// const Users = require('./users-model');

// router.get('/', (req, res) => {
//     if (req.headers.authorization) {
//         Users.findBy(req.headers.authorization)
//             .first()
//             .then(user => {
//                 if (user && bcrypt.compareSync(req.headers.authorization, user.username)) {
//                     Users.find()
//                 } else {
//                     res.status(401).json({error: "you shall not pass"})
//                 }
//             })
//             .catch(error => {
//                 res.status(400).json({error: "Error retrieving users"})
//             })
//     } else {
//         res.status(400).json({ error: "missing header"})
//     }
// })

// module.exports = router;