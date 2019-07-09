// Connect to the database
require('./db/mongoose')

// Core modules
const path = require('path')

// npm modules
const express = require('express')

// Express routers
const userRouter = require('./routes/users')
const spendingRouter = require('./routes/spendings')

// Init app; Get port
const app = express()
const port = process.env.PORT || 3000

const publicPath = path.join(__dirname, '../public')

app.use(express.json())
app.use(userRouter)
app.use(spendingRouter)

// Default path; Get index.html
app.get('', (req, res) => {
  res.sendFile(path.join(publicPath, '/index.html'))
})

// Run server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})