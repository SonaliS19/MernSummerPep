const express = require("express");
const {
   getProducts,
   createProducts,
   replaceProducts,
   deleteProducts,
   updateProducts,
   listProducts,
   checkId } = require("../controllers/productController");
const productRouter = express.Router()


//NOTE ALWAYS GIVE ANY CONSTANT BEFORE VARIABLES
// productRouter.route("/list").get((req,res)=>{
//   res.send("Done")
// });



productRouter.route("/").get(getProducts).post(createProducts);

productRouter.route("/list").get(listProducts)


productRouter.route("/:id").put(checkId, replaceProducts).delete(deleteProducts).patch(checkId,updateProducts);



module.exports = productRouter;