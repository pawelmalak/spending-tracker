const express = require('express')
const router = new express.Router()

router.get('', (req, res) => {
  res.render('index', {
    title: 'SpendingTracker | Login'
  })
})

module.exports = router