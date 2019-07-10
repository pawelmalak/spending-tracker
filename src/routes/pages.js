const express = require('express')
const router = new express.Router()

router.get('', (req, res) => {
  res.render('index', {
    pageTitle: 'SpendingTracker | Login',
    cardTitle: 'Login',
    btnText: 'Login',
    linkPath: '/users/register',
    linkText: 'Don\'t have an account? Create one now!'
  })
})

router.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

module.exports = router