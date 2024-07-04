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
  // const products = await productModel.find({}).limit(10);

  const { limit, page } = req.query;
  const products = await productModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit);

  const countDocuments = await productModel.countDocuments();
  res.send({
    status:"success",
    results: products.length,
    totalData: countDocuments,
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
    res.status(500);
    res.json({

      status:"fail",
      message:"title and price is required",
      info: err,

    });
 }

};




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
    info: err,
    });
  }

};



//Patch PATCH is a method of modifying resources where the client sends partial data that is to be updated without modifying the entire data------------------------------------------------------------------------------------
const updateProducts = async(req,res)=>{
  try{
    const {id} = req.params;
    const body = req.body;
    body.updatedAt = Date.now();
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

//DELETE--------------------------------------------------

const deleteProducts = async(req,res)=>{
  try{
    const {id} = req.params;
    

  await productModel.findOneAndDelete({_id:id});  //{new: true}:- for watchiong the new update on put req
  res.status(200)
  res.json({
    status:"success",
    data:{
      product: null,
      },
      });
}
catch(err){
    res.status(500);
    res.json({
      status:"fail",
      message:"title and price is required",
      info:err,
      });
    }
}

//LIST PRODUCTS for pizza dataset:----------------------------------------------------------
// const listProducts = async(req,res)=>{

//   //destructuring + default value
//   const { limit=10, ...filter } = req.query;
//   console.log("filters", filter)
  
//   // //destructuring
//   // const query = req.query;
//   // console.log(query)

//   const pizzaQuery = productModel.find(filter);

//   // //if limit is not given in query then take 10 by default
//   // const limitedPizzas= await pizzaQuery.limit(query.limit || 10);
//   const limitedPizzas= await pizzaQuery.limit(limit);
//   res.status(200)
//   res.json({
//     status:"success",
//     data:{
//       products:limitedPizzas,
//       }
//       });
      
// }




//list custom products ------------------------------------------------------------------

const listProducts = async (req, res) => {
  try {
      const { limit = 10, q = "", fields = "", sort = "price", page = 1, ...filters } = req.query;
      const selectionFields = fields.split("_").join(" ");
      const sortFields = sort.split("_").join(" ");
      let productsQuery = productModel.find(filters);
      // searching functionality
      productsQuery = productsQuery.where("title").regex(q);
      // reduce response size and select specific fields
      productsQuery = productsQuery.select(selectionFields);

      // count the total of result documents
      const countQuery = productsQuery.clone();
      const totalData = await countQuery.countDocuments();

      // sorting
      productsQuery = productsQuery.sort(sortFields);

      // pagination
      productsQuery = productsQuery.skip((page - 1) * limit);
      productsQuery = await productsQuery.limit(limit);

      res.json({
          status: "success",
          results: productsQuery.length,
          totalData: totalData,
          data: {
              pizzas: productsQuery,
          },
      });
  } catch (err) {
      res.status(500);
      res.json({
          status: "fail",
          message: "Internal Server Error",
      });
  }
};


module.exports ={
  getProducts,
  createProducts,
  replaceProducts,
  deleteProducts,
  updateProducts,
  listProducts,
  checkId,
} 

































