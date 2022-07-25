const express = require('express')
const env = require('dotenv').config();
const userData = require('./MOCK_DATA.json');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLScalarType, GraphQLInt, GraphQLString } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

const RootQuery = new GraphQLObjectType()
const Mutation = 'mutation';

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

