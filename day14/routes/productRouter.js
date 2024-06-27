const express = require("express")
const app = express()

//importing productControllers
const {getProducts,createProducts} = require("../controllers/productControllers.js")



//defining router
const productRouter = express.Router();

//another way to create a post and get api using routes
// app.route("/products").get(getProducts).post(createProducts)

//using router instead  of app
productRouter.route("/").get(getProducts).post(createProducts)


module.exports={
  productRouter
}