const express = require('express')
const env = require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
// const schema = require('./src/graphql/index')
const schema = require('./src/api/schema')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphql: true
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

