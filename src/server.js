require('./db/mongoose')
const path = require('path')
const express = require('express')
const hbs = require('hbs')

const pageRouter = require('./routes/pages')
const userRouter = require('./routes/users')
const spendingRouter = require('./routes/spendings')

const app = express()
const port = process.env.PORT || 3000

const public = path.join(__dirname, '../public')
const views = path.join(__dirname, '../templates/views')
const partials = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', views)
hbs.registerPartials(partials)

app.use(express.json())
app.use(express.static(public))
app.use(pageRouter)
app.use(userRouter)
app.use(spendingRouter)

app.get('', (req, res) => {
  res.sendFile(path.join(publicPath, '/index.html'))
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})