const path = require('path')
require('dotenv').config()
const express = require('express')
const app = express()
require('./server/config/db.js')(app)
require('./server/config/middleware.js')(app)
const api = require('./server/routes/api.js')(app)

app.use('/api', api)

app.use( express.static( `${__dirname}/front-end/build` ));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/front-end/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

const port = 3005
app.listen(port, () =>{
  console.log(`listening on port ${port}`)
})
