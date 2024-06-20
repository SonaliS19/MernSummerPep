const http = require("http")
const fs = require("fs")

// const server = http.createServer((req,res)=>{
//    res.write("hello");
//    res.end();

// });

// server.listen(1500);


const server = http.createServer((req,res)=>{
  //content-type 
  res.setHeader("content-Type", "text/html")

  console.log(Object.keys(req))
  console.log(req.url)


  ////IF/ELSE METHODE OF ROUTES ---------------------------------------------------------------------------------

  // if(req.url=='/'){
    // // res.write("<h1>Home page</h1>")
    // const homefile = fs.readFileSync('./pages/home.html')
    // res.end(homefile);
  // }
  // else if(req.url=='/about'){
  //   // res.write("About Us")
  //   const htmlfile = fs.readFileSync('./pages/about.html')
  //   res.end(htmlfile);
  // }
  // else{
  //   res.write("invalid input")
  //   res.write(`
  //     <html>
  //     <title>home page</title>
  //     <head>
  //     <style>
  //     body{
  //     background: BROWN;
  //     padding: 24px;
  //     }
  //     </style>   
  //     </head>
  //     <body> 
  //      <p> ERROR 404 </p> 
  //     </body>
  //     </html>
  //   `)
  // }
  // res.end()


  ////SWITCH CASE METHODE OF ROUTES--------------------------------------------------------------------------------------
  const route = req.url;
  switch(route){
    case "/": {
      
    const homefile = fs.readFileSync('./pages/home.html')
    res.end(homefile);

      break;
    };
    case "/product":{
      res.end("This is the Products page")
      break;

    };
    default:{
      res.end("oops!! something went wrong")
    }
  }


  //-------------------------------------------------------------------------------------------------------------------

})

server.listen((1500),()=>{
  console.log("server is running on port 1500")
})