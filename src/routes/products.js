const express = require('express')
const router = express.Router()
import db from '../startup/db'

router.get('/', async (req, res) => {
  db.connect(function (err) {
    if (err) throw err
    console.log('Connected!')
  })
  let sql = 'SELECT * FROM products'
  db.query(sql, function (err, result) {
    if (err) throw err
    console.log(result)
    res.send(result)
  })

  db.end(function (err) {
    if (err) throw err
    console.log('Db connection closed')
  })
})

module.exports = router
