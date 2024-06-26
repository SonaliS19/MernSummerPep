//connecting the env file
require("dotenv").config()
//requiring database from mongodb atlas
require("./database/db.js");

const express = require("express")
const app = express()
const port = 3000





//listening the port
app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`)
})