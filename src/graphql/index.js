const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = require('graphql');
const UserType = require('./TypeDefs/UserType')
const userData = require('../../MOCK_DATA.json');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      getAllUser: {
        type: new GraphQLList(UserType),
        args: { id: { type: GraphQLInt} },
        resolve(parent, args){
          return userData;
        }
      },
      // getUserById
    }
})
  
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createUser: {
        type: UserType,
        args: {
          id: { type: GraphQLInt },
          name: { type: GraphQLString },
          email: { type: GraphQLString }
        },
        resolve(parent, args){
          userData.push({
            id: userData.length + 1,
            name: args.name,
            email: args.email
          })
          return args;
        }
      },
      // updateUser,
      // deleteUser
    }
})
  
module.exports = new GraphQLSchema({query:  RootQuery, mutation: Mutation})