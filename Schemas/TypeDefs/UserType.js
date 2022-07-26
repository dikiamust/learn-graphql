const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = require('graphql');

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
      id: {type: GraphQLInt},
      name: {type: GraphQLString},
      email: {type: GraphQLString}
    })
})

module.exports = UserType;
  