const express = require('express')
const router = new express.Router()

router.get('/users', (req, res) => {
  res.send('users')
})

module.exports = router