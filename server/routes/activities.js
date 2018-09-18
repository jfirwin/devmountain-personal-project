module.exports = function(app) {
  const express = require('express')
  const router = express.Router()

  router.get(`/`,(req, res) => {
    app.get('db').activities.get_queried_activities({
      north: parseFloat(req.query.north),
      east: parseFloat(req.query.east),
      south: parseFloat(req.query.south),
      west: parseFloat(req.query.west),
      minrating: parseInt(req.query.minrating),
      maxrating: parseInt(req.query.maxrating),
      start_date: req.query.start_date,
      end_date: req.query.end_date
    })
      .then(markers => {
        markers.map(marker => {
          marker.position = [marker.lnglat.y,marker.lnglat.x]
          delete marker.lnglat
          marker.coordinator = marker.coordinator[0]
          marker.activitydate = marker.activitydate.toISOString().split('T')[0]
        })
        res.status(200).send({
          markers,
          bounds: {
            north: req.query.north,
            east: req.query.east,
            south: req.query.south,
            west: req.query.west
          },
          searchParams: {
            start_date: req.query.start_date,
            end_date: req.query.end_date,
            minrating: req.query.minrating,
            maxrating: req.query.maxrating
          }

        })
      })
      .catch(error => {
        console.log(error)
      })

  })

  router.get(`/id/:id`, (req, res) => {
    app.get('db').activities.get_activity_by_id({activityid: req.params.id})
      .then(result => {
        result[0].position = [result[0].lnglat.y,result[0].lnglat.x]
        delete result[0].lnglat
        result[0].activitydate = result[0].activitydate.toISOString().split('T')[0]
        res.status(200).send(result[0])
      })
      .catch(error => {
        console.log(error)
        res.status(500).send(error)
      })
  })

  router.get(`/auth`, (req, res) => {
    app.get('db').activities.get_auth_activities({authid: req.user.authid})
      .then(activities => {
        if(activities) {
          activities.map(activity => {
            activity.position = [activity.lnglat.y,activity.lnglat.x]
            delete activity.lnglat
            activity.activitydate = activity.activitydate.toISOString().split('T')[0]
          })
          res.status(200).send(activities)
        } else res.status(200).send([])
      })
      .catch(error => {
        console.log(error)
      })
  })

  router.put(`/`, (req, res) => {
    console.log('update', req.body)
    app.get('db').activities.update_activity({
      title: req.body.title,
      lnglat: `(${req.body.position[1]},${req.body.position[0]})`,
      activitydate: req.body.activitydate,
      rating: req.body.rating,
      description: req.body.description,
      activityid: req.body.activityid,
      authid: req.user.authid
    })
      .then(response => {
        response[0].position = [response[0].lnglat.y,response[0].lnglat.x]
        delete response[0].lnglat
        response[0].activitydate = response[0].activitydate.toISOString().split('T')[0]
        res.status(200).send(response)
      })
      .catch(error => {
        res.status(500).send(error)
      })
  })

  router.post(`/`, (req, res) => {
    app.get('db').activities.create_activity({
      title: req.body.title,
      lnglat: `(${req.body.position[1]},${req.body.position[0]})`,
      activitydate: req.body.activitydate,
      rating: req.body.rating,
      description: req.body.description,
      authid: req.user.authid
    })
      .then(activity => {
        activity.map(a => {
          a.position = [a.lnglat.y,a.lnglat.x]
          delete a.lnglat
          a.activitydate = a.activitydate.toISOString().split('T')[0]
        })
        res.status(200).send(activity)
      })
      .catch(error => {
        console.log(error)
      })
  })

  router.delete(`/`, (req, res) => {
    app.get('db').activities.delete_activity({activityid: req.query.id})
      .then(response => {
        res.status(200).send(req.query.id)
      })
      .catch(error => {
        res.status(500).send(error)
      })
  })

  router.get(`/:username`, (req, res) => {
    app.get('db').activities.get_user_activities({username: req.params.username})
      .then(activities => {
        activities.map(activity => {
          activity.position = [activity.lnglat.y,activity.lnglat.x]
          delete activity.lnglat
          activity.activitydate = activity.activitydate.toISOString().split('T')[0]
        })
        res.status(200).send(activities)
      })
      .catch(error => {
        console.log(error)
      })
  })

  return router
}
