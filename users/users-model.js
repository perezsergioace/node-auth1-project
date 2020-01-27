const db = require('../data/dbconfig');

module.exports = {
    find
}

function find() {
    return db('users').select('id', 'username');
}