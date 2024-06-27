//require productModel
const productModel = require("../models/productModel")

// const { productsCollection }= require("../config/db")

const getProducts = async(req,res)=>{
  // res.send("get products")

  // const products = await productsCollection.find().toArray();
  // res.send({
  //   status:"success",
  //   data:{
  //     products:products,
  //   },
  // });


  ////MONGOOSE--------------------------------------------------
  const products = await productModel.find();
  res.send({
    status:"success",
    data:{
      products,
      },
      });

};

const createProducts = async(req,res)=>{
  // const body = req.body;
  // //validation error
  // if(!body.title || !body.price){
  //   return res.status(400)
  //   res.json({
  //     status:"error",
  //     message:"title and price are required",

  //   });
  //   return;
  // }
  // const newProduct = await productsCollection.insertOne(body);
  // res.send({
  //   status:"success",
  //   data:{
  //     product:newProduct,
  //     },
  //     });



  //MONGOOS ------------------------------------------------------------------------------
 
  //validation
 try{
  const body = req.body;
  const newProduct = await productModel.create(body);
  res.send({
    status:"success",
    data:{
      product:newProduct,
      },
      });

 }
 catch(err){
    console.log(err);
    res.status(400);
    res.json({

      status:"fail",
      message:"title and price is required",

    });
 }

}


//PUT REQUEST:for replacing Products in the db-------------------------------------------------------------------------------------------------------

const replaceProducts = async(req,res)=>{
try{
  const {id} = req.params;
  const body = req.body;
  
  const newProduct = await productModel.findOneAndReplace({_id:id}, body, {new: true});  //{new: true}:- for watchiong the new update on put req
  res.status(200)
  res.json({
    status:"success",
    data:{
      product:newProduct,
      },
      });
}

catch(err){
  console.log(err);
  res.status(500);
  res.json({
    status:"fail",
    message:"title and price is required",
    info:err,
    });
  }

  

};





module.exports ={
  getProducts,
  createProducts,
  replaceProducts,
} 

