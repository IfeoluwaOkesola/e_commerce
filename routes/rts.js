const express = require('express');
const addProducts = require('../controllers/productControl');

const routeManager = express.Router();

routeManager.post('/addProducts', addProducts);

module.exports = routeManager;
