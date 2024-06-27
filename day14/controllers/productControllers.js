//import  productsCollection
const {productsCollection} = require("../database/db.js")

const getProducts = async(req,res)=>{
  const products = await productsCollection.find().toArray();

  // const products1 = productsCollection.findOne()
  // console.log("\n: products list", products, products1);

  res.json({
   
      status: "success",
      data:{
        products:products,
      },
   

  });
  }


  const  createProducts = async(req,res)=>{
    const body = req.body;
    if(!body.title || !body.price){
      res.status(400);
     res.json({
        status: "error",
        message: "Please provide title and price of the product",
        });
        return;
    }
    const result = await productsCollection.insertOne(body);
    res.json({
      status: "success",
      data: {
        product: result,
      },
      });
    }

    
  module.exports = {
    getProducts,
    createProducts,
  }