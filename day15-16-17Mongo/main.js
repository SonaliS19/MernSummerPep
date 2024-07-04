//importing env
require("dotenv").config();

//require productModel
require("./config/db")

//importing express
const express = require("express")
//importing productRouter
const productRouter = require("./routes/productRoutes") 



const app = express();
//importing cors
app.use(express.json());
app.use("/api/v1/products",productRouter);



app.listen(process.env.PORT,()=>{
  console.log(`server is running on port ${process.env.PORT}`);
})