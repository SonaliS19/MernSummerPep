// const username ="sonali";
// const password = "sibbu";
// const dbname = "Day14MDB"


//connecting MongoDB manually
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@threadswaphub.hgpho6l.mongodb.net/<dbname>?retryWrites=true&w=majority&appName=ThreadSwapHub";
let dbURL = uri;
// dbURL = dbURL.replace("<username>",username)
// dbURL = dbURL.replace("<password>",password)
// dbURL = dbURL.replace("<dbname>",dbname)


//for security reason send personal details to .env file and replace it like---------------------------------------------------
dbURL = dbURL.replace("<username>", process.env.DB_USERNAME)
dbURL = dbURL.replace("<password>",process.env.DB_PASSWORD)
dbURL = dbURL.replace("<dbname>",process.env.DB_NAME)



// //connecting MongoDB
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://sonali:sibbu@threadswaphub.hgpho6l.mongodb.net/?retryWrites=true&w=majority&appName=ThreadSwapHub";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
//note:dbURL is replaced at the place of uri
const client = new MongoClient(dbURL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     // await client.connect();
//     // Send a ping to confirm a successful connection
//     // await client.db("admin").command({ ping: 1 });


//     //CONNECTING TO our DATABASE
//     const database = client.db(process.env.DB_NAME)
//     const product = database.collection("products")
//    const res = await product.insertOne({name:"sonali", subject:"Mern"})
//    console.log(res)


    // console.log("Successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


const database = client.db(process.env.DB_NAME)

const  productsCollection = database.collection("products")

module.exports={
  database,
  productsCollection
}