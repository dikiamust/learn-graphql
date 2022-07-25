const express = require('express')
const env = require('dotenv').config();
const userData = require('./MOCK_DATA.json');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const app = express()

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: GraphQLInt},
    name: {type: GraphQLString},
    email: {type: GraphQLString}
  })
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

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

const schema = new GraphQLSchema({query:  RootQuery, mutation: Mutation})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const port = process.env.PORT || 3300


const appStart = () => {
  try {
    app.listen(port, () => console.log(`server running on http://localhost:${port}`))
  } catch (error) {
    console.log('ERROR: ', error)
  }
}

appStart()

