const express = require('express')
const router = new express.Router()

router.get('/spendings', (req, res) => {
  res.send('spendings')
})

module.exports = router