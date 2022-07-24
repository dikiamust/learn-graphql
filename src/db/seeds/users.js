const faker = require('faker');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { name: 'user 1', email: 'user1@mail.com', password: 'password1', phone: '088888' },
    { name: 'user 2', email: 'user2@mail.com', password: 'password2', phone: '088882' },
    { name: 'user 3', email: 'user3@mail.com', password: 'password3', phone: '088883' }
  ]);
};
