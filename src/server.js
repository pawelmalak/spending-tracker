const path = require('path')
const express = require('express')
const userRouter = require('./routes/users')
const spendingRouter = require('./routes/spendings')

const app = express()

const publicPath = path.join(__dirname, '../public')

app.use(userRouter)
app.use(spendingRouter)
app.use(express.static(publicPath))

const port = process.env.PORT || 3000

app.get('', (req, res) => {
  res.sendFile(path.join(publicPath, '/index.html'))
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})