const express = require("express");
const { getProducts,createProducts,replaceProducts } = require("../controllers/productController");
const productRouter = express.Router()

// productRouter.route("/").get((req,res)=>{
//   res.send("Done")
// });

productRouter.route("/").get(getProducts).post(createProducts);
productRouter.route("/:id").put(replaceProducts);

module.exports = productRouter;