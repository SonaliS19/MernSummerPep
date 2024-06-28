//require productModel
const productModel = require("../models/productModel")

// const { productsCollection }= require("../config/db")


//CHECKID - CREATING A MIDDLEWARE--------------------------------------------------------------------------

const checkId = async (req, res, next) => {
  try {
      const { id } = req.params;
      const product = await productModel.findById(id);
      if (!product) {
          res.status(404);
          res.json({
              status: "fail",
              message: "Product ID not found !",
          });
          return;
      }
      next();
  } catch (err) {
      if (err.name === "CastError") {
          res.status(400);
          res.json({
              status: "fail",
              message: "Invalid product ID !",
          });
          return;
      }
      res.status(500);
      res.json({
          status: "fail",
          err: "Internal Server Error",
      });
  }
};




//get req--------------------------------------------------------------------------------
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
  const products = await productModel.find({}).limit(10);
  res.send({
    status:"success",
    data:{
      products,
      },
      });

};





//POST REQ----------------------------------------------------------------------------
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




//PUT REQUEST:PUT is a method of modifying resource where the client sends data that updates the entire resource . -------------------------------------------------------------------------------------------------------

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

//DELETE--------------------------------------------------

const deleteProducts = async(req,res)=>{
  try{
    const {id} = req.params;
    const body = req.body;

  const newProduct = await productModel.findOneAndDelete({_id:id}, body);  //{new: true}:- for watchiong the new update on put req
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
}

//Patch PATCH is a method of modifying resources where the client sends partial data that is to be updated without modifying the entire data------------------------------------------------------------------------------------
const updateProducts = async(req,res)=>{
  try{
    const {id} = req.params;
    const body = req.body;

    const newProduct = await productModel.findOneAndUpdate({_id:id},body,{new: true});
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
    res.json({
      status:"fail",
      message:"title and price is required",
    })
  }
}



//LIST PRODUCTS:----------------------------------------------------------
const listProducts = async(req,res)=>{

  //destructuring + default value
  const { limit=10, ...filter } = req.query;
  console.log("filters", filter)
  
  // //destructuring
  // const query = req.query;
  // console.log(query)

  const pizzaQuery = productModel.find(filter);

  // //if limit is not given in query then take 10 by default
  // const limitedPizzas= await pizzaQuery.limit(query.limit || 10);
  const limitedPizzas= await pizzaQuery.limit(limit);
  res.status(200)
  res.json({
    status:"success",
    data:{
      products:limitedPizzas,
      }
      });
      
}
module.exports ={
  getProducts,
  createProducts,
  replaceProducts,
  deleteProducts,
  updateProducts,
  listProducts,
  checkId,
} 

































