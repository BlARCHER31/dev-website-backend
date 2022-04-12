"use strict";

var _db = _interopRequireDefault(require("../startup/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require('express');

const router = express.Router();

/* Gets ALL products from the database. */
router.get('/', async (req, res) => {
  let sql = `SELECT products.id, products.price, products.title, product_img.img_url, products.description, products.category_id 
    FROM products INNER JOIN product_img ON product_img.product_id = products.id
    WHERE NOT products.id = 6;`;

  _db.default.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});
/* Get ALL products from a specific category from the db. */

router.get('/categories/:categoryID', async (req, res) => {
  let sql = `SELECT products.id, products.price, products.title, product_img.img_url, products.description, product_category.name 
  FROM products 
  INNER JOIN product_img ON product_img.product_id = products.id
  INNER JOIN product_category ON products.category_id = product_category.id
  WHERE product_category.id = ${req.params.categoryID}`;

  _db.default.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});
/*Gets FEATURED products*/

router.get('/featured', async (req, res) => {
  let sql = `SELECT products.id, products.price, products.title, product_img.img_url, products.category_id
  From products
  INNER JOIN product_img ON product_img.product_id = products.id
  WHERE featured=TRUE;`;

  _db.default.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});
/*Gets a specific Product*/

router.get('/product/:id', async (req, res) => {
  let sql = `SELECT products.id, products.price, products.title, product_img.img_url, products.description
  From products
  INNER JOIN product_img ON product_img.product_id = products.id
  WHERE products.id=${req.params.id};`;

  _db.default.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});
router.get('/cart-items', async (req, res) => {
  let productIds = JSON.parse(req.headers.productids);
  let sql = `SELECT products.id, products.title, products.price, product_img.img_url
  FROM products
  INNER JOIN product_img ON product_img.product_id = products.id
  WHERE products.id IN (?);`;
  console.log(productIds);

  _db.default.query(sql, [productIds], function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});
/* This Function Will get all Categories from the database.
    It will return the category name and IMG URL. */

router.get('/categories', async (req, res) => {
  let sql = `SELECT product_category.name, product_category.id, product_img.img_url
      From product_category
      INNER JOIN product_img ON product_category.img_id = product_img.id;`;

  _db.default.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});
/* This Function will get the custom board product from the DB and return
    the URL for the pictures along with price and title. */

router.get('/custom', async (req, res) => {
  let sql = `SELECT products.id, products.price, products.title, product_img.img_url, products.description 
      FROM products INNER JOIN product_img ON product_img.product_id = products.id
      WHERE products.id = 6;`;

  _db.default.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});
module.exports = router;