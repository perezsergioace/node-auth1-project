
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'user 1', password: 'password1'},
        {username: 'user 2', password: 'password2'},
        {username: 'user 3', password: 'password3'},
      ]);
    });
};
