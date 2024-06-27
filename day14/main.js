//connecting the env file
require("dotenv").config()

// //importing productControllers
// const {getProducts} = require("./controllers/productControllers.js")
// const {createProducts} = require("./controllers/productControllers.js")
// //import  productsCollection
// const {productsCollection} = require("./database/db.js")

//importing productRouter
const {productRouter} = require("./routes/productRouter.js")

//requiring database from mongodb atlas
require("./database/db.js");

const express = require("express")
const app = express()

//body parsing middleware
app.use(express.json())

const port = 1400

// //create a get api
// app.get("/products",getProducts);
// //create a post api
// app.post("/products",createProducts);


// //another way to create a post and get api using routes
// app.route("/products").get(getProducts).post(createProducts)


//now lets move all routes to router folder for more redable code
app.use("/products",productRouter);

//listening the port
app.listen(port, ()=>{
  console.log(`App is running on port ${port}`)
})