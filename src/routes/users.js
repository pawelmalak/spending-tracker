const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.get('/users', (req, res) => {
  res.send('users')
})

router.get('/users/register', (req, res) => {
  res.render('index', {
    pageTitle: 'SpendingTracker | Register',
    cardTitle: 'Register',
    btnText: 'Create New Account',
    linkPath: '/',
    linkText: 'Already have an account? Sign in'
  })
})

router.post('/users/register', async (req, res) => {
  const user = new User(req.body)

  try {
    await user.save()
    res.status(201).send({ user, redirect: '/dashboard' })
  }
  catch (error) {
    res.status(400).send(error)
  }
})

module.exports = router