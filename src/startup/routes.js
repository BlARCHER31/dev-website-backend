import express from 'express'
import cors from 'cors'
import products from '../routes/products'

module.exports = function (app) {
  app.use(express.json())
  app.use(cors())

  app.use('/api/products', products)
}
