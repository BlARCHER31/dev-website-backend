"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _products = _interopRequireDefault(require("../routes/products"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
  app.use(_express.default.json());
  app.use((0, _cors.default)());
  app.use('/api/products', _products.default);
};