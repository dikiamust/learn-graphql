const environment = 'development';
// const config = require('../../knexfile')(environment)
const config = require('../../knexfile').development;
const knex = require('knex')(config)

module.exports = knex;