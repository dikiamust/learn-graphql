/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert([
    { title: 'title 1',  body: 'body 1', slug: 'slug 1' },
    { title: 'title 2',  body: 'body 2', slug: 'slug 2' },
    { title: 'title 3',  body: 'body 3', slug: 'slug 3' }
  ]);
};
