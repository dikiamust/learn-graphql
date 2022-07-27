const db = require('../db/knex');

module.exports = {
  Query: {
    // async getCustomer(_, { id }) {
    //   return await db('customers').where('id', '=', id).first();
    // },
    async getPosts() {
      return await db('posts');
    },
    // async getOrder(_, { orderID }) {
    //   console.log(orderID);
    //   return await db('orders').where('orderID', '=', orderID).first();
    // },
    // async getOrders() {
    //   return await db('orders');
    // },
    // async getCustomerOrders(_, { customerID }) {
    //   return await db('orders').where('customerID', '=', customerID);
    // },
  },
  Mutation: {
    async createPost(_, newPost) {
      const result = await db('posts').insert({
        title: newPost.input.title,
        body: newPost.input.body,
        slug: newOrder.input.slug,
      });

      const orderID = result[0];
      return await db('posts').where({ orderID }).first();
    },
  },
};