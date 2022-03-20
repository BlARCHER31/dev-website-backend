const express = require('express')
const router = express.Router()
import db from '../startup/db'

/* Gets ALL products from the database. */
router.get('/', async (req, res) => {
  let sql =
    'SELECT products.id, products.price, products.title, product_img.img_url, products.description FROM products INNER JOIN product_img ON products.img_id = product_img.id'
  db.query(sql, function (err, result) {
    if (err) throw err
    console.log(result)
    res.send(result)
  })
})

/*Gets FEATURED products*/

router.get('/featured', async (req, res) => {
  // db.connect(function (err) {
  //   if (err) throw err
  //   console.log('Connected!')
  // })

  let sql = `SELECT products.id, products.price, products.title, product_img.img_url
  From products
  INNER JOIN product_img ON products.img_id = product_img.id
  WHERE featured=TRUE;`

  db.query(sql, function (err, result) {
    if (err) throw err
    console.log(result)
    res.send(result)
  })
})

/*Gets a sepecific Product*/

router.get('/:id', async (req, res) => {
  let sql = `SELECT products.id, products.price, products.title, product_img.img_url, products.description
  From products
  INNER JOIN product_img ON products.img_id = product_img.id
  WHERE products.id=${req.params.id};`

  db.query(sql, function (err, result) {
    if (err) throw err
    console.log(result)
    res.send(result)
  })
})

module.exports = router
