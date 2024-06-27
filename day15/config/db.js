// const { MongoClient, ServerApiVersion } = require("mongodb");



// const uri = "mongodb+srv://<username>:<password>@threadswaphub.hgpho6l.mongodb.net/<dbName>?retryWrites=true&w=majority&appName=ThreadSwapHub";

// //replace name, password, dbName
// let dbURL = uri;
// dbURL = dbURL.replace("<username>", process.env.DB_USERNAME)
// dbURL = dbURL.replace("<password>",process.env.DB_PASSWORD)
// dbURL = dbURL.replace("<dbName>",process.env.DB_NAME)

// //connect to client
// const client = new MongoClient(dbURL, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// const database = client.db(process.env.DB_NAME)
// const productsCollection = database.collection("products")


// module.exports={
//   productsCollection,
// }



//MONGOOS--------------------------------------------------------------

const mongoose = require("mongoose");


const uri = "mongodb+srv://<username>:<password>@threadswaphub.hgpho6l.mongodb.net/<dbName>?retryWrites=true&w=majority&appName=ThreadSwapHub";

//replace name, password, dbName
let dbURL = uri;
dbURL = dbURL.replace("<username>", process.env.DB_USERNAME)
dbURL = dbURL.replace("<password>",process.env.DB_PASSWORD)
dbURL = dbURL.replace("<dbName>",process.env.DB_NAME)


mongoose.connect(dbURL)
.then(()=>{
  console.log("Connected to MongoDB")
})
.catch((err)=>{
  console.log("connetion failed")
  console.log(err)
})