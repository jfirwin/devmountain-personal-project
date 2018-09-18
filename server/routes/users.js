module.exports = function(app) {
  const express = require('express')
  const router = express.Router()


  router.get('/auth', (req, res) => {
    app.get('db').users.get_auth_user({authid: req.user.authid})
      .then(user => {
        res.status(200).send(user[0])
      })
      .catch(error => {
        console.log(error)
        res.status(200).send(error)
      })
  })

  router.get(`/usernamecheck`, (req, res) => {
    app.get('db').users.username_check({string: req.query.string})
      .then(availability => {
        res.status(200).send(availability)
      })
  })

  router.put(`/`, (req, res) => {
    app.get('db').users.update_user({
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      home: req.body.home,
      authid: req.user.authid
    })
      .then(user => {
        res.status(200).send(user)
      })
      .catch(error => {
        res.status(500).send(error)
      })
  })

  router.put(`/images`, (req, res) => {
    app.get('db').users.update_user_images({
      imgurl: req.body.imgurl,
      coverurl: req.body.coverurl,
      authid: req.user.authid
    })
      .then(userimages => {
        res.status(200).send(userimages)
      })
      .catch(error => {
        res.status(500).send(error)
      })
  })

  router.get('/:username', (req, res) => {
    app.get('db').users.get_user({username: req.params.username})
      .then(user => {
        res.status(200).send(user[0])
      })
      .catch(error => {
        console.log(error)
        res.status(200).send(error)
      })
  })

  return router
}
