const cors = require('cors')
const bodyParser = require('body-parser')

module.exports = function(app) {
  app.use(cors({origin: true, credentials: true}))
  app.use(bodyParser.json())
}
