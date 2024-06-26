// const express = require('express')
// const fsPromises = require('fs/promises')
// const app = express()
// const port = 3000

// app.use(express.json());


// //Creating getData function
// const getData = async () =>{
//   const text = await fsPromises.readFile("./data.json", {encoding: "utf-8"});
//   let products;
//   try{
//     products = JSON.parse(text);
//     }
//     catch(e){
//       products = [];
//       }

//       return products;
// };



// app.get('/', async(req, res)=>{
//   // console.log('Hello World');
//   // res.send('Hello World')

//   const text = await fsPromises.readFile("./data.json", {encoding: "utf-8"});
//   // const data = JSON.parse(text);
//   let products;
//   try{
//     products = JSON.parse(text);

//   }
//   catch(e){
//     products = [];
//   }
//   res.json({
//     status: "success",
//     data:{
//       products: products,
//     },
   
//   });
// })





// app.post('/products', async (req,res)=>{
//   // console.log(typeof req)
//   // console.log(Object.keys(req));



//   const body = req.body
//   // console.log(body)

//   const products = await getData();
//   // console.log("\n: getData",products)

//   //find last prodcut id
//   // const prlen = products.length;
//   // const lastIndex = prlen -1;
//   // const lastItem = products[lastIndex];
//   // const lastId = lastItem.id;


//   //OPTIMISATIO0N O0F CODE

//   let lastId =0;
//   if(products.length !=0){
//     lastId = products[products.length - 1].id;
//   }
 
//   body.Id = lastId+1; 

//   products.push(body)
//   // console.log(products)
// //pushing the data into json file
      
//       await fsPromises.writeFile("./data.json", JSON.stringify(products));
//   res.json({
    
//     status: "In progress",
//     data: {
//       product: body,
//     },
//   });
// })


// app.put("/products/:id", (req, res)=>{
//   const params = res.params
//   console.log(params)

//   const body = res.body
//   console.log(body);

//   res.send({
//     status: "success",
//   })
  

// })


// app.listen(port ,()=>{
//   console.log(`Server is running on port ${port}`);
// })
  





//DAY13-----------------------------------------------

const express = require("express");
var morgan = require("morgan");


const productRouter = require("./routes/productRoutes.js");

const app = express();

//internal middleware
app.use(express.json());

//custom middleware

app.use((req,res, next)=>{
  console.log("Hello from custom middleware");
  res.set({"server-time": Date.now()})
  console.log("req url and req method", req.url, req.method);
  next();
})

//external middleware
app.use(morgan("dev"));

app.use("/products", productRouter);

app.listen(1400);





