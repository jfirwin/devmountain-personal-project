const massive = require('massive')
const path = require('path')

module.exports = function(app) {
  const connection = massive(process.env.CONNECTION_STRING,{scripts: path.join(__dirname, '../db/')})
    .then(db => {
      console.log('db set up!')
      app.set('db', db)
    })
    .catch(error => console.log(error))
    return connection
}
