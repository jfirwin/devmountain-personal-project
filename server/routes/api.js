module.exports = function(app) {
  const express = require('express')
  const router = express.Router()
  const activities = require('./activities.js')(app)
  const users = require('./users.js')(app)
  const auth = require('./auth.js')(app)

    router.use('/activities', activities)
    router.use('/users', users)
    router.use('/auth', auth)

  return router
}
