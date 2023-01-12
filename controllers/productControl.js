const sequelize = require("../config/connections");
const { Product } = require("../models/products");
var bodyParser = require('body-parser')

const addProducts = async (req,res) => {
    const newStock = {
        productName: req.body,
        price: req.body,
        image: req.body,
        description: req.body,
        discountprice: req.body

    }

  const newStockCreate =  await Product.create(newStock)
  if (newStockCreate){
    res.status(200).json([{message: "product created"}])
  } else {
    res.status(200).json([{message: "error"}])
  }
}


module. exports = addProducts;