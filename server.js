const express = require('express')
const env = require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

const port = process.env.PORT || 3300


const appStart = () => {
  try {
    app.listen(port, () => console.log(`server running on http://localhost:${port}`))
  } catch (error) {
    console.log('ERROR: ', error)
  }
}

appStart()

